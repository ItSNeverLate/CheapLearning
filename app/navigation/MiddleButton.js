import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function MiddleButton({ children, size, color }) {
    return (
        <View style={getStyles(size,color).container}>
            {children}
        </View>
    );
}

const getStyles = (size,color) => StyleSheet.create({
    container: {
        height: size * 2,
        width: size * 2,
        top:-size,
        borderWidth:2,
        borderRadius: size,
        borderColor:color,
        backgroundColor:colors.white,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default MiddleButton;