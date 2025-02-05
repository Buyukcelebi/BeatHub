import { Octicons as Icon, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import getSymbolFromCurrency from 'currency-symbol-map';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './SubscriptionStyles';
import Button from '../../components/Buttons/Button';
import SubscriptionButton from '../../components/Buttons/SubscriptionButton';
import useThemedStyles from '../../theme/useThemedStyles';

import URLs from '../../constants/Urls';

const windowWidth = Dimensions.get('window').width;

export default function SubscriptionScreen({
  products,
  requestSubscription,
  isLoadingInApp,
  isProcessing,
  isPlusUser,
  restore,
  route,
}) {
  const style = useThemedStyles(styles);
  const navigation = useNavigation();
  const [selectedOffer, setSelectedOffer] = useState();
  const { t, i18n } = useTranslation();
  const params = route?.params;
  const navigateTo = params?.navigateTo;

  useEffect(() => {
    setSelectedOffer();
  }, [products]);

  const benefitList = [
    {
      title: t('Instant AI Music Creation'),
      subtitle: t('Generate Songs Within Seconds'),
      icon: 'music',
      iconType: 'MaterialCommunityIcons',
      duration: 1000,
    },
    {
      title: t('Custom Cover Generation'),
      subtitle: t('From Music to Selected Cover'),
      icon: 'microphone-variant',
      iconType: 'MaterialCommunityIcons',
      duration: 1500,
    },
    {
      title: t('Full Commercial Rights'),
      subtitle: t('Use Songs for Any Business Purpose'),
      icon: 'note',
      iconType: 'Octicons',
      duration: 2000,
    },
    {
      title: t('Professional Quality'),
      subtitle: t('Studio-Grade Music Production'),
      icon: 'unmute',
      iconType: 'Octicons',
      duration: 2500,
    },
  ];

  return (
    <View style={style.container}>
      <ScrollView style={style.scrollView}>
        <Spinner visible={isLoadingInApp || isProcessing} overlayColor="rgba(0, 0, 0, 0.25)" />

        <TouchableOpacity
          disabled={isLoadingInApp || isProcessing}
          onPress={() => {
            if (!navigateTo) {
              navigation.pop();
            } else {
              navigation.navigate(navigateTo, {
                isDefault: true,
              });
            }
          }}
          style={style.closeButton}>
          <Icon name="x" size={20} style={style.titleIcon} />
        </TouchableOpacity>

        <View style={style.scrollContent}>
          <View style={style.headerSection}>
            <Text style={style.headerTitle}>Get Full Access</Text>
            <LinearGradient
              colors={['#FEB47B', '#86A8E7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={style.headerBadge}>
              <Text style={style.headerBadgeText}>AI Music & Cover Generator</Text>
            </LinearGradient>
          </View>

          <View style={style.benefitsSection}>
            {benefitList.map((item) => (
              <Animatable.View
                key={item?.title}
                animation="fadeIn"
                duration={item?.duration}
                style={style.benefitItem}>
                <View style={style.benefitIconWrapper}>
                  {item.iconType === 'MaterialCommunityIcons' ? (
                    <MaterialCommunityIcons name={item.icon} style={style.benefitIcon} />
                  ) : (
                    <Icon name={item.icon} style={style.benefitIcon} />
                  )}
                </View>
                <View style={style.benefitTextWrapper}>
                  <Text style={style.benefitTitle}>{item.title}</Text>
                  <Text style={style.benefitSubtitle}>{item.subtitle}</Text>
                </View>
              </Animatable.View>
            ))}
          </View>

          <View style={style.bodyWrapper}>
            <View style={style.offersContainer}>
              {products?.map((item) => (
                <SubscriptionButton
                  key={item?.product?.priceString}
                  price={`${getSymbolFromCurrency(item?.product?.currencyCode)}${(
                    item?.product?.price /
                    (item?.product?.subscriptionPeriod === 'P1W'
                      ? 1
                      : item?.product?.subscriptionPeriod === 'P1M'
                        ? 4
                        : 1)
                  )?.toFixed(2)}`}
                  priceDesc={t('per year')}
                  text={`${t(
                    item?.product?.subscriptionPeriod === 'P1W'
                      ? 'Weekly'
                      : item?.product?.subscriptionPeriod === 'P1M' ||
                          item?.product?.subscriptionPeriod === 'P3M'
                        ? 'Monthly'
                        : 'Annual'
                  )}`}
                  period={item?.product?.subscriptionPeriod === 'P1W' ? 'week' : 'year'}
                  subText={
                    item?.product?.subscriptionPeriod === 'P1Y'
                      ? t(`Just for {{price}}/week`, {
                          price: `${getSymbolFromCurrency(
                            item?.product?.currencyCode
                          )}${(item?.product?.price / 52).toFixed(2)}`,
                        })
                      : ''
                  }
                  discountText={item?.product?.subscriptionPeriod === 'P1Y' && '%70 off'}
                  isSelected={selectedOffer?.identifier === item?.identifier}
                  onPress={() => setSelectedOffer(item)}
                />
              ))}

              <View style={{ marginTop: 5 }}>
                <Text style={style.footerText}>
                  <Icon name="shield" style={style.footerIcon} />{' '}
                  {t('Cancel Anytime, Recursive Billing')}
                </Text>

                <Button
                  fontSize={18}
                  text={t('Continue')}
                  width={windowWidth - 40}
                  disabled={isLoadingInApp || isProcessing}
                  rightIcon={<Icon name="chevron-right" size={18} style={style.titleIcon} />}
                  onPress={() => {
                    requestSubscription(selectedOffer);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[style.buttonFooterView]}>
        <View style={style.footerLinkView}>
          <TouchableOpacity
            disabled={isLoadingInApp || isProcessing}
            style={style.footerLink}
            onPress={() => Linking.openURL(URLs?.PRIVACY_POLICY)}>
            <Text style={[style.footerTextLink]}>{t('Terms & Conditions')}</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={isLoadingInApp || isProcessing} onPress={() => restore()}>
            <Text style={[style.footerText, style.footerTextLink]}>{t('Restore')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
