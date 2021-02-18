import { useTheme } from '@react-navigation/native';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
// import SvgUri from "expo-svg-uri";

const SvgIcon = (props) => {

    const Icon = props.icon;

    let size = wp(`${5}%`);
    switch (props.size) {
        case "small":
            size = wp(`${2}%`);
        case "large":
            size = wp(`${8}%`);
    }

    const theme = useTheme();

    return (
        <Icon width={size} height={size} fill={props.color || theme.colors.primary} />
        // <SvgUri width="200" height="200" source={require("./ic_menu.svg")} />

        )
}

SvgIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    icon: PropTypes.func
}

export default SvgIcon;
