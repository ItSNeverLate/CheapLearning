import React from 'react'
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default VerticalSpacer = ({ percentage }) => {
    const styles = getStyles(percentage);

    return (
        <View style={styles.container} />
    )
}

const getStyles = percentage => StyleSheet.create({
    container: {
        height: hp(`${percentage || 2}%`)
    }
})