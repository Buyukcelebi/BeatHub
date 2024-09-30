import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

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
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.navButtonNow,
          selectedTab === 'now' && styles.navButtonSelected,
        ]}
        onPress={onPressLeft}>
        <Text style={styles.navButtonText}>{buttonTextLeft}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navButtonWeakly,
          selectedTab === 'weakly' && styles.navButtonSelected,
        ]}
        onPress={onPressMid}>
        <Text style={styles.navButtonText}>{buttonTextMid}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navButtonMonthly,
          selectedTab === 'monthly' && styles.navButtonSelected,
        ]}
        onPress={onPressRight}>
        <Text style={styles.navButtonText}>{buttonTextRight}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButtonNow: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#3b3b3b',
    borderRadius: 20,
    marginRight: 15,
  },
  navButtonWeakly: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#3b3b3b',
    borderRadius: 20,
    marginRight: 10,
  },
  navButtonMonthly: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#3b3b3b',
    borderRadius: 20,
    marginRight: 10,
  },
  navButtonSelected: {
    backgroundColor: '#ffffffed',
  },
  navButtonText: {
    color: '#180606',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ButtonGroup;
