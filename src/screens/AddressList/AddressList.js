import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import BottomTab from "../../components/BottomTab/BottomTab";
import Card from "./Card/AddressCard";
import { Ionicons } from "@expo/vector-icons";
//import { Ionicons } from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

/* Config/Constants
DATA for the address
============================================================================= */
const DATA = [
  {
    id: 1,
    default: false,
    title: "My Home",
    country: "Pakistan",
    city: "Islamabad",
    address: "Block 4, Apartment 102",
    poBox: "P.O Vox 65000",
  },
  {
    id: 2,
    default: true,
    title: "My Work",
    country: "Pakistan",
    city: "Karachi",
    address: "Block 4350, Floor 1, Office 3",
    poBox: "P.O Vox 65002",
  },
];

function AddressList(props) {
  const [isDefault, isDefaultSetter] = useState(
    DATA.find((element) => element.default === true).id
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <TouchableOpacity
              activeOpacity={0}
              onPress={() => props.navigation.goBack()}
              style={styles.backImg}
            >
              <Ionicons name="ios-arrow-back" size={30} />
            </TouchableOpacity>
            <Text style={styles.headerText}>My Adresses</Text>
            <View style={styles.headerBtn}>
              <TouchableOpacity activeOpacity={0}>
                <Text style={styles.headerBtnText}>New Address</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.main}>
            <ScrollView style={styles.mainScroll}>
              {DATA.map((item, index) => (
                <Card
                  navigationObj={props.navigation}
                  title={item.title}
                  country={item.country}
                  city={item.city}
                  address={item.address}
                  poBox={item.poBox}
                  key={index}
                  default={item.id === isDefault}
                  defaultSetter={() => isDefaultSetter(item.id)}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <BottomTab navigationObj={props.navigation} />
      </View>
    </SafeAreaView>
  );
}

export default AddressList;
