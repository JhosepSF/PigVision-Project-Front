// components/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>©2026 PIGVISION</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 10,
    backgroundColor: '#e9f1f6',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#c2d7e4',
  },
  footerText: {
    fontSize: 12,
    color: '#315f78',
  },
});
