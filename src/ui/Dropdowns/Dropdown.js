import React from 'react';
import { Dropdown as DropdownMaterial } from 'react-native-material-dropdown';

function Dropdown(props) {
    return (
        <DropdownMaterial
            containerStyle={{ width: 150, marginBottom: 20 }}
            value={props.items[0].value}
            data={props.items}
            textColor='rgb(208, 173, 138)'
            fontSize={16}
            baseColor='rgb(208, 173, 138)'
            dropdownPosition={0}
        />
    )
}
export default Dropdown;