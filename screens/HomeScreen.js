import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { FONTS, SIZES } from "../constants/theme";
import globalstyles from "../styles/globalstyles";

const HomeScreen = () => {
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            padding: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={
              (uri =
                "https://style.shockvisual.net/wp-content/uploads/2020/05/uber-eats.jpg")
            }
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, align }}></View>
      </View>
    );
  }

  function renderEstablishmentsCategories() {
    const renderItem = ({ item }) => {
      <TouchableOpacity style={globalstyles.renderItemTouchableOpacity}>
        <View style={globalstyles.viewCategories}>
          <Image
            source={"../assets/img"}
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
        </View>
      </TouchableOpacity>;
    };
    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1 }}>Categoria</Text>
        <Text style={{ ...FONTS.h1 }}>De</Text>
        <Text style={{ ...FONTS.h1 }}>Establecimientos</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={global.container}>
      {renderHeader()}
      {renderEstablishmentsCategories()}
    </SafeAreaView>
  );
};

export default HomeScreen;
