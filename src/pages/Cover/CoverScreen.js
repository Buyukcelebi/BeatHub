import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  Alert,
  AppState,
  Modal,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import useTheme from '../../theme/useTheme';
import useThemedStyles from '../../theme/useThemedStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Button from '@/components/Buttons/Button';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import { useIsFocused } from '@react-navigation/native';
import { fetchCoverList, createCover } from '../../providers/internalApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STORAGE_KEYS from '../../constants/StorageKeys';
import * as Localization from 'expo-localization';
import { useStyles } from './CoverStyle';

const CoverScreen = ({ isPlusUser }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const styles = useStyles();
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedVoice, setSelectedVoice] = React.useState(null);
  const [selectedMusic, setSelectedMusic] = React.useState(null);
  const [lastCheckedUrl, setLastCheckedUrl] = React.useState(null);
  const [voiceModels, setVoiceModels] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isCreating, setIsCreating] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const inputRef = React.useRef(null);
  const isFocused = useIsFocused();

  const categories = [
    { id: 'All', icon: 'grid-outline' },
    // { id: 'Cartoon', icon: 'happy-outline' },
    // { id: 'Fictional', icon: 'game-controller-outline' },
    { id: 'Musicians', icon: 'musical-notes-outline' },
    { id: 'Celebrity', icon: 'person-outline' },
    // { id: 'Fun', icon: 'star-outline' },
    { id: 'Hot', icon: 'flame-outline' },
    { id: 'Random', icon: 'shuffle-outline' },
  ];

  const fetchVoiceModels = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const countryCode = Localization.region || Localization.locale.split('-')[1] || 'US';
      const covers = await fetchCoverList(countryCode);
      setVoiceModels(covers);
    } catch (error) {
      console.error('Error fetching voice models:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchVoiceModels();
  }, [fetchVoiceModels]);

  const renderVoiceItem = ({ item }) => (
    <TouchableOpacity
      style={styles.voiceItem}
      onPress={() => {
        setSelectedVoice(item.id);
        console.log(item.id);
      }}>
      <View
        style={[styles.imageContainer, selectedVoice === item.id && styles.selectedVoiceContainer]}>
        <Image source={{ uri: item.avatar }} style={styles.voiceImage} resizeMode="cover" />
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.gradient}>
          <Text style={styles.voiceName}>{item.nickname}</Text>
        </LinearGradient>
        {selectedVoice === item.id && (
          <View style={styles.selectedOverlay}>
            <Icon name="checkmark-circle" size={24} color={theme.colors.green} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const handleOnSelect = React.useCallback((music) => {
    console.log('music @@@@@@@@@@@@@@', music);
    setSelectedMusic(music);
  }, []);

  const handleInputFocus = React.useCallback(() => {
    try {
      inputRef.current?.blur();
      navigation.navigate('PickMusicModal', {
        onSelect: handleOnSelect,
      });
    } catch (error) {
      console.log('Error while handling focus:', error);
    }
  }, [navigation, handleOnSelect]);

  const getInputPlaceholder = React.useCallback(() => {
    if (selectedMusic?.url) {
      return selectedMusic.url;
    }
    return t('Search on Spotify');
  }, [selectedMusic, t]);

  const isYoutubeUrl = (url) => {
    try {
      const youtubeRegex =
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
      return youtubeRegex.test(url);
    } catch (error) {
      return false;
    }
  };

  const handlePaste = React.useCallback(async () => {
    try {
      const clipboardContent = await Clipboard.getStringAsync();
      if (clipboardContent && isYoutubeUrl(clipboardContent)) {
        setSelectedMusic({
          url: clipboardContent,
          title: clipboardContent,
        });
      } else {
        Alert.alert('Invalid URL', 'Please paste a valid YouTube URL');
      }
    } catch (error) {
      console.log('Error while pasting:', error);
      Alert.alert('Error', 'Could not access clipboard');
    }
  }, []);

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active' && isFocused) {
        checkClipboard();
      }
    });
    return () => {
      subscription.remove();
    };
  }, [isFocused]);

  const checkClipboard = React.useCallback(async () => {
    try {
      const clipboardContent = await Clipboard.getStringAsync();
      if (
        clipboardContent &&
        isYoutubeUrl(clipboardContent) &&
        clipboardContent !== selectedMusic?.url &&
        clipboardContent !== lastCheckedUrl
      ) {
        setLastCheckedUrl(clipboardContent);
        setSelectedMusic({
          url: clipboardContent,
          title: clipboardContent,
        });
      }
    } catch (error) {
      console.log('Error checking clipboard:', error);
    }
  }, [selectedMusic, lastCheckedUrl]);

  const renderInputRightIcon = React.useCallback(() => {
    if (selectedMusic?.url) {
      return (
        <TouchableOpacity
          onPress={() => {
            setSelectedMusic(null);
            setLastCheckedUrl(null);
          }}
          style={styles.pasteButton}
          activeOpacity={0.7}>
          <Icon name="close-circle-outline" size={20} color={theme.colors.white} />
        </TouchableOpacity>
      );
    }
    // return (
    // <TouchableOpacity onPress={handlePaste} style={styles.pasteButton} activeOpacity={0.7}>
    //   <Icon name="clipboard-outline" size={20} color={theme.colors.white} />
    // </TouchableOpacity>
    //);
  }, [selectedMusic, handlePaste]);

  const handleCreate = React.useCallback(async () => {
    if (!selectedVoice || !selectedMusic?.url) {
      Alert.alert('Error', 'Please select both a voice and a song');
      return;
    }

    try {
      setIsCreating(true);
      const ytId = selectedMusic.url.split('v=')[1]?.split('&')[0];
      if (!ytId) {
        Alert.alert('Error', 'Invalid YouTube URL');
        return;
      }

      const response = await createCover(selectedVoice, ytId);
      console.log('Cover created:', response);

      if (response.status === 'success') {
        try {
          const existingCovers = await AsyncStorage.getItem(STORAGE_KEYS.COVERS);
          const covers = existingCovers ? JSON.parse(existingCovers) : [];

          // Format the cover data for MyLibrary compatibility
          const selectedVoiceModel = voiceModels.find((model) => model.id === selectedVoice);
          const newCover = {
            id: response.prediction.id,
            status: response.prediction.status,
            progress: 0,
            error: null,
            createdAt: new Date().toISOString(),
            youtubeId: ytId,
            youtubeTitle: selectedMusic.title,
            youtubeUrl: selectedMusic.url,
            model: {
              id: response.model.id,
              name: response.model.name,
              avatar: selectedVoiceModel?.avatar,
              tags: selectedVoiceModel?.tags || [],
            },
            coverUrl: null,
            type: 'cover',
            estimatedTime: response.estimatedTime,
          };

          covers.unshift(newCover);
          await AsyncStorage.setItem(STORAGE_KEYS.COVERS, JSON.stringify(covers));

          // Clear selections after successful creation
          setSelectedCategory('All');
          setSelectedVoice(null);
          setSelectedMusic(null);
          setLastCheckedUrl(null);

          // Show success modal instead of alert
          handleSuccess();
        } catch (storageError) {
          console.error('Error storing cover in local storage:', storageError);
        }
      }
    } catch (error) {
      console.error('Error creating cover:', error);
      Alert.alert('Error', 'Failed to create cover');
    } finally {
      setIsCreating(false);
    }
  }, [selectedVoice, selectedMusic, voiceModels, handleSuccess]);

  const filterVoicesByCategory = React.useCallback((voices, category) => {
    if (!category || category === 'All') {
      return voices;
    }

    if (category === 'Random') {
      // Shuffle array and return first 9 items
      return [...voices].sort(() => Math.random() - 0.5).slice(0, 9);
    }

    if (category === 'Musicians') {
      return voices.filter(
        (voice) =>
          voice.tags &&
          voice.tags.some(
            (tag) => tag.toLowerCase() === 'musician' || tag.toLowerCase() === 'musicians'
          )
      );
    }

    if (category === 'Celebrity') {
      return voices.filter(
        (voice) =>
          voice.tags &&
          !voice.tags.some(
            (tag) => tag.toLowerCase() === 'musician' || tag.toLowerCase() === 'musicians'
          )
      );
    }

    return voices.filter(
      (voice) =>
        voice.tags && voice.tags.some((tag) => tag.toLowerCase() === category.toLowerCase())
    );
  }, []);

  const filteredVoiceModels = React.useMemo(() => {
    return filterVoicesByCategory(voiceModels, selectedCategory);
  }, [voiceModels, selectedCategory, filterVoicesByCategory]);

  const handleSuccess = () => {
    setShowSuccessModal(true);
  };

  const handleGoToLibrary = () => {
    setShowSuccessModal(false);
    navigation.navigate('Library');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.songSection}>
          <Text style={styles.sectionTitle}>{t('Pick a Song')}</Text>
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
              value={selectedMusic?.title || ''}
              placeholderTextColor={theme.colors.placeholder}
              onFocus={handleInputFocus}
              editable={true}
            />
            {renderInputRightIcon()}
          </View>
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Text style={[styles.sectionTitle, { marginTop: 10 }]}>{t('Pick a Voice')}</Text>
            <View style={styles.voiceCategories}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category.id && styles.categoryButtonSelected,
                  ]}
                  onPress={() => setSelectedCategory(category.id)}>
                  <Icon
                    name={category.icon}
                    size={16}
                    color={theme.colors.white}
                    style={styles.categoryIcon}
                  />
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === category.id && styles.categoryTextSelected,
                    ]}>
                    {category.id}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.voiceListContainer}>
              <FlatList
                data={filteredVoiceModels}
                renderItem={renderVoiceItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
                scrollEnabled={false}
                columnWrapperStyle={styles.voiceRow}
                contentContainerStyle={styles.voiceListContent}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.fixedButtonContainer}>
        <Button
          text="Create"
          fontWeight="bold"
          onPress={handleCreate}
          disabled={!selectedVoice || !selectedMusic?.url || isCreating}
          isLoading={isCreating}
        />
      </View>

      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <Icon name="checkmark-circle" size={50} color="#1DB954" />
            </View>
            <Text style={styles.modalTitle}>Success!</Text>
            <Text style={styles.modalText}>Your cover is being processed</Text>
            <TouchableOpacity style={styles.goToLibraryButton} onPress={handleGoToLibrary}>
              <Text style={styles.goToLibraryText}>Go to My Library</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CoverScreen;
