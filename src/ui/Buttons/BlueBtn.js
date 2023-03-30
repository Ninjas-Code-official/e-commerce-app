import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { blueBtn as styles } from './styles';

/* Config/Constants
============================================================================= */

/* =============================================================================
<MainBtn />
Blue btn used. Height is fixed, width is adaptable. If have to force width, set width of the parent container.
It appears this one is a bit smaller than others so i have its height a bit lower
--------------------------------------------------------------------------------

Props:
  ?
  onPress Event: send the function to be called for onPress event
  text: send the Text for button
============================================================================= */

const BlueBtn = props => (
  <View style={styles.backgroundColor}>
    <TouchableOpacity
      activeOpacity={0}
      onPress={props.onPress}
      style={styles.main_blue_btn}
    >
      <Text style={styles.btn_text}>
        {' '}
        {props.text}
        {' '}
      </Text>
    </TouchableOpacity>
  </View>
);

export default BlueBtn;
