import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ToggleSwitch = ({ activeView, onToggle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          activeView === 'List View' && styles.activeButton,
        ]}
        onPress={() => onToggle('List View')}
      >
        <Text style={[
          styles.buttonText,
          activeView === 'List View' && styles.activeButtonText
        ]}>
          List View
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeView === 'Map View' && styles.activeButton,
        ]}
        onPress={() => onToggle('Map View')}
      >
        <Text style={[
          styles.buttonText,
          activeView === 'Map View' && styles.activeButtonText
        ]}>
          Map View
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e5e7eb',
    padding: 4,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  activeButton: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  buttonText: {
    color: '#4b5563',
  },
  activeButtonText: {
    color: '#1f2937',
  },
});

export default ToggleSwitch;