import { Octicons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
  Process,
  SafeAreaView,
} from 'react-native';

import styles from './SettingsStyles';
import URLs from '../../constants/Urls';
import useThemedStyles from '../../theme/useThemedStyles';

export default function SettingsScreen({ isPlusUser }) {
  const style = useThemedStyles(styles);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const isAndroid = Platform.OS !== 'ios';
  const [hasNotificationPermission, setHasNotificationPermission] = useState(false);

  useEffect(() => {
    checkNotificationPermission();
  }, []);

  const checkNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setHasNotificationPermission(status === 'granted');
  };

  const settingsList = [
    {
      title: '',
      list: [
        {
          title: 'Unlock all!',
          icon: 'zap',
          onPress: () =>
            navigation.navigate('SubscriptionScreen', {
              navigateTo: 'HomeScreen',
            }),
        },
        ...(!hasNotificationPermission
          ? [
              {
                title: 'Notification Settings',
                icon: 'globe',
                onPress: () => _openNotificationSettings(),
              },
            ]
          : []),
        {
          title: 'Legal',
          icon: 'book',
          onPress: () => Linking.openURL(URLs.PRIVACY_POLICY),
        },
        {
          title: 'Review Us',
          icon: 'heart',
          onPress: () => Linking.openURL(isAndroid ? URLs.PLAY_STORE_LINK : URLs.APP_STORE_LINK),
        },
        {
          title: 'Privacy Policy',
          icon: 'shield',
          onPress: () => Linking.openURL(URLs.PRIVACY_POLICY),
        },
        {
          title: 'Terms of Use',
          icon: 'law',
          onPress: () => Linking.openURL(URLs.PRIVACY_POLICY),
        },
      ],
    },
  ];

  const _openNotificationSettings = async () => {
    try {
      if (Platform.OS === 'ios') {
        await Linking.openURL('app-settings://notification/Hugify');
      } else {
        const pkg = Constants?.expoConfig?.android?.package;
        if (!pkg) {
          console.error('Package name not found');
          return;
        }

        if (Platform.Version >= 26) {
          await Linking.openSettings();
        } else {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            { key: 'app_package', value: pkg },
            { key: 'app_uid', value: Process.myUid?.toString() },
          ]);
        }
      }
    } catch (error) {
      console.error('Error opening settings:', error);
      Linking.openSettings();
    }
  };

  const SettingsItem = ({ title, onPress, icon }) => (
    <View>
      <TouchableOpacity style={[style.settingsItem]} onPress={onPress}>
        <View style={style.settingsItemWrapper}>
          <Icon name={icon} size={20} style={style.settingsIcon} />
          {/* <View style={style.iconWrapper}></View> */}
          <Text style={style.settingsTitle}>{t(title)}</Text>
        </View>
        <Icon name="chevron-right" size={14} style={style.settingsRightIcon} />
      </TouchableOpacity>
    </View>
  );

  const Hr = () => (
    <View style={style.hrWrapper}>
      <View style={style.hr} />
    </View>
  );

  const SettingsGroup = ({ title, list }) => {
    return (
      <View style={style.settingsGroupContainer}>
        {title && <Text style={style.settingsGroupTitle}>{t(title)}</Text>}

        <View style={style.contentWrapper}>
          {list.map((item, index) => (
            <React.Fragment key={item.title || index}>
              <SettingsItem {...item} />
              {index < list.length - 1 && <Hr />}
            </React.Fragment>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.titleContainer}>
        <TouchableOpacity
          style={style.backButton}
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
          <Icon name="chevron-left" size={32} style={style.titleIcon} />
        </TouchableOpacity>
        <Text style={style.title}>{t('Settings')}</Text>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          {settingsList.map((item, index) => (
            <SettingsGroup key={index} {...item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
