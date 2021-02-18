import React from 'react'
import { StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default HorizontalSpacer = ({ percentage }) => {
    const styles = getStyles(percentage);

    return (
        <View style={styles.container} />
    )
}

const getStyles = percentage => StyleSheet.create({
    container: {
        width: wp(`${percentage || 2}%`)
    }
})