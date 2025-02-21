import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import { useNavigation } from '@react-navigation/native';
import internalApi from '../../providers/internalApi';
import PropTypes from 'prop-types';
import { Audio } from 'expo-av';

const PickMusicModal = ({ visible }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const styles = useThemedStyles(createStyles);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const inputRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [popularSongs, setPopularSongs] = useState([]);
  const [error, setError] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSongId, setPlayingSongId] = useState(null);

  useEffect(() => {
    fetchPopularMusic();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const fetchPopularMusic = async () => {
    if (popularSongs.length > 0) return;

    setLoading(true);
    setError(null);

    try {
      const results = await internalApi.search('trending', i18n.resolvedLanguage.split('-')[1]);
      setPopularSongs(results);
      setSongs(results);
    } catch (err) {
      setError(t('Failed to load popular music'));
      setPopularSongs([]);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSongs(popularSongs);
      return;
    }

    setLoading(true);
    setError(null);
    setSongs([]);

    try {
      const results = await internalApi.search(searchQuery, i18n.resolvedLanguage.split('-')[1]);
      setSongs(results);
    } catch (err) {
      setError(t('Search failed. Please try again.'));
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSongs(popularSongs);
    setError(null);
  };

  const handleSongSelect = (song) => {
    const route = navigation.getState().routes[navigation.getState().index];
    const onSelect = route.params?.onSelect;
    if (onSelect) {
      onSelect({
        url: song.url,
        id: song.id,
        title: song.title,
      });
    }
    handleClose();
  };

  const handlePlayPreview = async (song) => {
    try {
      if (playingSongId === song.id) {
        if (sound) {
          if (isPlaying) {
            await sound.pauseAsync();
            setIsPlaying(false);
          } else {
            await sound.playAsync();
            setIsPlaying(true);
          }
        }
      } else {
        if (sound) {
          await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: song.mp3 },
          { shouldPlay: true },
          onPlaybackStatusUpdate
        );

        setSound(newSound);
        setIsPlaying(true);
        setPlayingSongId(song.id);
      }
    } catch (error) {
      console.log('Error playing preview:', error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setIsPlaying(false);
      setPlayingSongId(null);
    }
  };

  const renderSongItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.songItem}
      activeOpacity={0.7}
      onPress={() => handleSongSelect(item)}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} resizeMode="cover" />
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => handlePlayPreview(item)}
          activeOpacity={0.7}>
          <Icon
            name={playingSongId === item.id ? (isPlaying ? 'pause' : 'play') : 'play'}
            size={20}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.songInfo}>
        <Text style={styles.songTitle} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <View style={styles.songDetails}>
          <Text style={styles.duration}>{item.artist}</Text>
          {item.duration && <Text style={styles.viewCount}> • {item.duration}</Text>}
        </View>
      </View>
      <Icon
        name="chevron-forward"
        size={20}
        color={theme.colors.placeholder}
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
  );

  const handleClose = () => {
    if (sound) {
      sound.unloadAsync();
      setSound(null);
    }
    setIsPlaying(false);
    setPlayingSongId(null);
    navigation.goBack();
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Icon name="close" size={24} color={theme.colors.white} />
          </TouchableOpacity>
          <Text style={styles.title}>{t('Pick a Song')}</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name="search"
            size={20}
            color={theme.colors.placeholder}
            style={styles.searchIcon}
          />
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder={t('Search on Spotify')}
            placeholderTextColor={theme.colors.placeholder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={searchQuery}
            onChangeText={setSearchQuery}
            editable={!loading}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
            keyboardAppearance="dark"
          />
          {searchQuery.length > 0 ? (
            <TouchableOpacity
              onPress={handleClearSearch}
              style={styles.pasteButton}
              disabled={loading}
              activeOpacity={0.7}>
              <Icon name="close-circle" size={20} color={theme.colors.white} />
            </TouchableOpacity>
          ) : null}
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        {!searchQuery && !isInputFocused && songs.length > 0 && (
          <Text style={styles.sectionTitle}>{t('Popular on Spotify')}</Text>
        )}

        <ScrollView
          nestedScrollEnabled
          contentContainerStyle={[
            styles.listContainer,
            {
              flexGrow: 1,
              justifyContent: loading || songs.length === 0 ? 'center' : 'flex-start',
            },
          ]}
          onScrollBeginDrag={() => {
            if (inputRef.current) {
              inputRef.current.blur();
            }
          }}>
          {loading ? (
            <Text style={styles.emptyText}>{t('Searching...')}</Text>
          ) : songs.length === 0 ? (
            <Text style={styles.emptyText}>{t('No results found')}</Text>
          ) : (
            !isInputFocused && songs.map((item) => renderSongItem(item))
          )}
        </ScrollView>

        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </View>
        )}
      </View>
    </View>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    modalContent: {
      flex: 1,
      backgroundColor: theme.colors.background,
      marginTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      position: 'relative',
      marginTop: 10,
    },
    closeButton: {
      position: 'absolute',
      left: 16,
      padding: 4,
      backgroundColor: theme.colors.settingsItemBG,
      borderRadius: 20,
      zIndex: 1,
    },
    placeholder: {
      width: 32,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.white,
      position: 'absolute',
      left: 0,
      right: 0,
      textAlign: 'center',
    },
    searchIcon: {
      paddingLeft: 15,
    },
    searchInput: {
      flex: 1,
      color: theme.colors.text,
      fontSize: 16,
      padding: 0,
      height: 24,
    },
    clearButton: {
      padding: 4,
    },
    listContainer: {
      paddingHorizontal: 16,
      marginTop: 0,
    },
    songItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginVertical: 4,
    },
    thumbnailContainer: {
      position: 'relative',
    },
    thumbnail: {
      width: 48,
      height: 48,
      borderRadius: 12,
      backgroundColor: theme.colors.placeholder,
    },
    playButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    songInfo: {
      flex: 1,
      marginLeft: 12,
      marginRight: 8,
    },
    songTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 4,
      lineHeight: 20,
    },
    songDetails: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    duration: {
      fontSize: 13,
      color: theme.colors.textSecondary,
      opacity: 0.8,
    },
    viewCount: {
      fontSize: 13,
      color: theme.colors.inputBackground,
      opacity: 0.8,
      marginLeft: 4,
    },
    arrowIcon: {
      marginLeft: 'auto',
      opacity: 0.5,
    },
    inputContainer: {
      marginHorizontal: 20,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderColor: theme.colors.settingsItemBG,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: theme.colors.screenBackground,
    },
    input: {
      flex: 1,
      padding: 10,
      paddingLeft: 10,
      fontSize: 16,
      color: theme.colors.white,
      textAlignVertical: 'top',
    },
    pasteButton: {
      padding: 10,
    },
    errorText: {
      color: theme.colors.error,
      textAlign: 'center',
      marginTop: 10,
      marginHorizontal: 20,
    },
    emptyText: {
      color: theme.colors.placeholder,
      textAlign: 'center',
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.white,
      marginHorizontal: 20,
      marginTop: 20,
      marginBottom: 5,
    },
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

PickMusicModal.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default PickMusicModal;
