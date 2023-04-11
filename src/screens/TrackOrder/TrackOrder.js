import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import styles from "./styles";
import BottomTab from "../../components/BottomTab/BottomTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackHeader } from "../../components/Headers/Headers";

/* Config/Constants
============================================================================= */

const data = [
  {
    time: "09:00",
    title: "Order Received",
    description: "13:32, Nov 05,2019",
    lineColor: "#8CB65E",
  },
  {
    time: "10:45",
    title: "In process",
    description: "13:40, Nov 05,2019",
    lineColor: "#8CB65E",
  },
  {
    time: "12:00",
    title: "Ready for Delivery",
    description: "13:55, Nov 05,2019",
    lineColor: "#8CB65E",
  },
  {
    time: "14:00",
    title: "Picked up by the driver",
    description: "14:15, Nov 05,2019",
    lineColor: "#8CB65E",
  },
  {
    time: "14:20",
    title: "Delivered",
    description: "14:15, Nov 05,2019",
    lineColor: "#8CB65E",
  },
];

function TrackOrder(props) {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.mainContainer]}>
        <BackHeader
          title="Order No. 10352"
          backPressed={() => props.navigation.goBack()}
        />
        <View style={styles.line}></View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardLeftContainer}>
              <Image
                source={require("../../assets/images/OrderDetail/basket.png")}
                style={styles.imgResponsive}
                resizeMode="cover"
              />
            </View>
            <View style={styles.cardRightContainer}>
              <Text style={[styles.productTitleStyle, styles.marginTop5]}>
                Leather Crossbody MID...
              </Text>
              <Text style={styles.productDescriptionStyle}>
                Courier received the order.
              </Text>
              <View style={styles.amountContainer}>
                <View style={styles.quantityContainer}>
                  <Text style={styles.productTitleStyle}>x1</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.productTitleStyle}>35 PKR</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.timelineContainer}>
          <Timeline
            data={data}
            circleSize={15}
            circleColor="#8CB65E"
            showTime={false}
            innerCircle="dot"
            titleStyle={{ marginTop: -14 }}
          />
        </View>
      </View>

      <BottomTab navigationObj={props.navigation} />
    </SafeAreaView>
  );
}

export default TrackOrder;
