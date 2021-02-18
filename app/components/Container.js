import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Container = (props) => {
    const styles = getStyles(props);

    return (
        <View style={[styles.container, props.style]} >
            {props.children}
        </View>
    )
}

Container.propTypes = {
    color: PropTypes.string,
    style:  PropTypes.array ,
    // paddingPercentage: PropTypes.number, 
    // paddingStartPercentage: PropTypes.number,
    paddingHorizontalPercentage: PropTypes.number, 
    paddingVerticalPercentage: PropTypes.number,
    borderRadiusPercentage: PropTypes.number,
    marginHorizontalPercentage: PropTypes.number,
    marginVerticalPercentage: PropTypes.number,
    widthPercentage: PropTypes.number, heightPercentage: PropTypes.number,
    full: PropTypes.bool, half: PropTypes.bool,
    row: PropTypes.bool, rowReverse: PropTypes.bool, columnReverse: PropTypes.bool,
    center: PropTypes.bool,
    justifyContentCenter: PropTypes.bool, justifyContentFlexEnd: PropTypes.bool, justifyContentFlexStart: PropTypes.bool, spaceAround: PropTypes.bool, spaceBetween: PropTypes.bool, spaceEvenly: PropTypes.bool,
    alignItemsCenter: PropTypes.bool, stretch: PropTypes.bool, baseline: PropTypes.bool, alignItemsFlexEnd: PropTypes.bool, alignItemsFlexStart: PropTypes.bool
}

export default Container;

const getStyles = (props) => {
    return (
        StyleSheet.create({
            container: {
                backgroundColor: props.color || 'transparent',
                flex: props.full ? 1 : 0,
                width: props.widthPercentage ? `${props.widthPercentage}%` : null,
                height: props.heightPercentage ? `${props.heightPercentage}%` : null,
                paddingHorizontal: props.paddingHorizontalPercentage ? wp(`${props.paddingHorizontalPercentage}%`) : 0,
                paddingVertical: props.paddingVerticalPercentage ? wp(`${props.paddingVerticalPercentage}%`) : 0,
                // padding: props.paddingPercentage ? wp(`${props.paddingPercentage}%`) : 0,
                borderRadius: props.borderRadiusPercentage ? wp(`${props.borderRadiusPercentage}%`) : 0,
                marginHorizontal: props.marginHorizontalPercentage ? wp(`${props.marginHorizontalPercentage}%`) : 0,
                marginVertical: props.marginVerticalPercentage ? wp(`${props.marginVerticalPercentage}%`) : 0,
                flexDirection: props.row ? 'row' : props.rowReverse ? 'row-reverse' : props.columnReverse ? 'column-reverse' : 'column',
                justifyContent: (props.center || props.justifyContentCenter) ? 'center' : props.justifyContentFlexEnd ? 'flex-end' : props.justifyContentFlexStart ? 'flex-start' : props.spaceAround ? 'space-around' : props.spaceBetween ? 'space-between' : props.spaceEvenly ? 'space-evenly' : null,
                alignItems: (props.center || props.alignItemsCenter) ? 'center' : props.stretch ? 'stretch' : props.baseline ? 'baseline' : props.alignItemsFlexEnd ? 'flex-end' : props.alignItemsFlexStart ? 'flex-start' : null,
            }
        })
    )
}