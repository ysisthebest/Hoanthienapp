import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// 👉 Expo thì dùng:
// import { Ionicons } from '@expo/vector-icons';

const NotificationItem = ({ item }) => {
  const renderIcon = () => {
    if (item.type === 'check') {
      return <Ionicons name="checkmark-circle" size={28} color="#3B5BDB" />;
    }
    if (item.type === 'user') {
      return <Ionicons name="people" size={28} color="#3B5BDB" />;
    }
    return null;
  };

  return (
    <View style={styles.item}>
      <View style={styles.iconWrapper}>{renderIcon()}</View>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#E9F0FB',
    marginBottom: 8,
    borderRadius: 8,
  },
  iconWrapper: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  desc: {
    color: '#555',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationItem;