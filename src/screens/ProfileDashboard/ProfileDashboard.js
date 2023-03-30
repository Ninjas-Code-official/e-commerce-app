import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import BottomTab from '../../components/BottomTab/BottomTab';
import CardContainer from './CardContainer/CardContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

function ProfileDashboard(props) {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.mainContainer]}>
        <ProfileContainer
          navigationObj={props.navigation}
        />
        <View style={styles.tabContainer}>
          <TouchableOpacity>
            <Text style={styles.tabStyleActive}>My Active Orders (3)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('PreviousOrders')}
          >
            <Text style={styles.tabStyle}>Previous Orders (35)</Text>
          </TouchableOpacity>
        </View>
        <CardContainer
          navigationObj={props.navigation}
        />
      </View>
      <BottomTab
        navigationObj={props.navigation}
      />
    </SafeAreaView>
  );
}

export default ProfileDashboard;
