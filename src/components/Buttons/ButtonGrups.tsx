import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { useStyles } from './ButtonStyles';

type ButtonGroupProps = {
  buttonTextLeft: string;
  buttonTextMid: string;
  buttonTextRight: string;
  selectedTab: string;
  onPressLeft: () => void;
  onPressRight: () => void;
  onPressMid: () => void;
};

const ButtonGroup = ({
  selectedTab,
  buttonTextLeft,
  buttonTextMid,
  buttonTextRight,
  onPressLeft,
  onPressRight,
  onPressMid,
}: ButtonGroupProps): React.JSX.Element => {
  const styles = useStyles();

  return (
    <View style={styles.buttonGroupContainer}>
      <TouchableOpacity
        style={[styles.navButton, selectedTab === 'now' && styles.navButtonSelected]}
        onPress={onPressLeft}>
        <Text style={[styles.navButtonText, selectedTab === 'now' && styles.selectedText]}>
          {buttonTextLeft}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navButton, selectedTab === 'weakly' && styles.navButtonSelected]}
        onPress={onPressMid}>
        <Text style={[styles.navButtonText, selectedTab === 'weakly' && styles.selectedText]}>
          {buttonTextMid}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navButton, selectedTab === 'monthly' && styles.navButtonSelected]}
        onPress={onPressRight}>
        <Text style={[styles.navButtonText, selectedTab === 'monthly' && styles.selectedText]}>
          {buttonTextRight}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGroup;
