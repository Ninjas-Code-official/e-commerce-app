import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { mainBtnStyles as styles } from './styles';

/* Config/Constants
============================================================================= */

/* =============================================================================
<MainBtn />
Golden/ Brownish btn used. Height is fixed, width is adaptable. If have to force width, set width of the parent container.
--------------------------------------------------------------------------------

Props:
  ?
  onPress Event: send the function to be called for onPress event
  text: send the Text for button
============================================================================= */

const MainBtn = props => (
  <View style={styles.backgroundColor}>
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.main_brown_btn}
      activeOpacity={0}
    >
      <Text style={styles.btn_text}>
        {' '}
        {props.text}
        {' '}
      </Text>
    </TouchableOpacity>
  </View>
);

export default MainBtn;
