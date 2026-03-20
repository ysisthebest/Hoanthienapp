import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ScrollView
} from 'react-native';

import styles from '../styles';
import SectionHeader from '../components/SectionHeader';

export default function HomeScreen() {

  // DATA MẪU
  const categories = [
    { id: "1", name: "Burger" },
    { id: "2", name: "Pizza" },
    { id: "3", name: "Drink" },
  ];

const items = [
  {
    id: "1",
    name: "Cheese Burger",
    price: "$5",
    image: require("../assets/pizza.png")
  },
  {
    id: "2",
    name: "Pizza",
    price: "$8",
    image: require("../assets/Cheese-burger.png")
  }
];

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>

      {/* 🔍 Search Bar */}
      <TextInput
        placeholder="Search..."
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10
        }}
      />

      {/* 📂 Top Categories */}
      <SectionHeader title="Top Categories" />

      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: "#eee",
            padding: 10,
            borderRadius: 8,
            marginRight: 10
          }}>
            <Image
  source={item.image}
  style={{ width: 60, height: 60 }}
/>
          </View>
        )}
      />

      {/* ⭐ Popular Items */}
      <SectionHeader title="Popular Items" />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: "row",
            marginBottom: 10,
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 8,
            elevation: 2
          }}>
<Image
  source={item.image}
  style={{ width: 60, height: 60 }}
/>
            <View style={{ marginLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* 🔥 Sale-off Items */}
      <SectionHeader title="Sale-off Items" />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id + "sale"}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: "row",
            marginBottom: 10,
            backgroundColor: "#ffe0e0",
            padding: 10,
            borderRadius: 8
          }}>
<Image
  source={item.image}
  style={{ width: 60, height: 60 }}
/>
            <View style={{ marginLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        )}
      />

    </ScrollView>
  );
}