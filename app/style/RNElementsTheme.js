import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import defaultColors from './colors/default';
import defaultFontConfig from './fontConfigs/en';

// Percent
const fontSizeNormal = 3;
const fontSizeH4 = 1.4;
const fontSizeH3 = 2;
const fontSizeH2 = 4;
const fontSizeH1 = 6;
const inputHeight = 5;
const inputBorderRadius = inputHeight / 2;
const floatingLabelInputHeight = 6;
const floatingLabelInputBorderRadius = floatingLabelInputHeight / 2;
const buttonGroupHeight = floatingLabelInputHeight;
const buttonGroupBorderRadius = buttonGroupHeight / 2;
const buttonGroupFontSize = 1.2;
const floatingLabelInputFontSize = 1.2;
const inputFontSize = 1.5;

export default (fontConfig=defaultFontConfig,colors = defaultColors) => {
    return ({
        colors,
        Text: {
            ...StyleSheet.create({
                style: {
                    ...fontConfig.bold,
                    fontSize: wp(`${fontSizeNormal}%`),
                },
                h1Style: {
                    ...fontConfig.bold,
                    fontSize: wp(`${fontSizeH1}%`),
                    alignSelf: 'center',
                },
                h2Style: {
                    ...fontConfig.meduim,
                    fontSize: wp(`${fontSizeH2}%`),
                    fontWeight: 'normal', // essential
                    alignSelf: 'center',
                    // fontWeight:'bold'
                },
                h3Style: {
                    ...fontConfig.meduim,
                    fontSize: wp(`${fontSizeH3}%`),
                    fontWeight: 'normal', // essential
                    alignSelf: 'center'
                },
                h4Style: {
                    ...fontConfig.meduim,
                    fontSize: wp(`${fontSizeH4}%`),
                    fontWeight: 'normal', // essential
                    // alignSelf: 'center'
                    // marginHorizontal: wp('2%')
                }
            })
        },
        Input: {
            ...StyleSheet.create({
                inputContainerStyle: {
                    borderRadius: hp(`${inputBorderRadius}%`),
                    paddingHorizontal: wp(`${inputBorderRadius / 2}%`),
                    height: hp(`${inputHeight}%`),
                    borderBottomWidth: 0,
                },
                inputStyle: {
                    ...fontConfig.bold,
                    fontSize: wp(`${inputFontSize}%`),
                    borderBottomWidth: 0,
                    // paddingTop:20,
                    // alignSelf:'flex-end'
                },
                containerStyle: {
                    height: hp(`${inputHeight}%`),
                },
            })
        },
        FloatingLabelInput: {
            ...StyleSheet.create({
                labelStyle: {
                    ...fontConfig.normal,
                    fontSize: wp(`${floatingLabelInputFontSize}%`),
                },
                inputStyle: {
                    ...fontConfig.bold,
                    fontSize: wp(`${floatingLabelInputFontSize}%`),
                    borderBottomWidth: 0,
                    marginTop: hp(`${floatingLabelInputHeight / 3}%`),
                },
                containerStyle: {
                    height: hp(`${floatingLabelInputHeight}%`),
                    borderRadius: hp(`${floatingLabelInputBorderRadius}%`),
                    paddingHorizontal: hp(`${floatingLabelInputBorderRadius / 2}%`),
                },
            })
        },
        Button: {
            ...StyleSheet.create({
                titleStyle: {
                    ...fontConfig.bold,
                    fontSize: wp(`${fontSizeNormal}%`)
                }
            })
        },
        Icon: {
            size: wp(`${fontSizeH3}%`),
            ...StyleSheet.create({

            })
        },
        ButtonGroup: {
            ...StyleSheet.create({
                buttonStyle: {
                    borderRadius: hp(`${buttonGroupHeight}%`),
                    height: hp(`${buttonGroupHeight}%`),
                    paddingHorizontal: hp(`${buttonGroupBorderRadius / 2}%`),
                },
                textStyle: {
                    ...fontConfig.bold,
                    borderRadius: hp(`${buttonGroupFontSize}%`),
                    fontSize: wp(`${buttonGroupFontSize}%`),
                },
                buttonContainerStyle: {
                    flex: 0,
                    borderEndWidth: 0,
                },
                containerStyle: {
                    borderWidth: 0,
                    height: hp(`${floatingLabelInputHeight}%`),
                },
                selectedButtonStyle: {
                },
                selectedTextStyle: {
                    ...fontConfig.bold,
                    fontSize: wp(`${buttonGroupFontSize}%`)
                }
            })
        }
    })
}