import {isIOS} from "./common";

export const fontFamily = {
    DMSANS: {
        regular: isIOS() ? "DMSans-Regular" : "DMSansRegular",
        medium: isIOS() ? "DMSans-Medium" : "DMSansMedium",
        light: isIOS() ? "DMSans-Light" : "DMSansLight",
        semibold: isIOS() ? "DMSans-SemiBold" : "DMSansSemiBold",
        thin: isIOS() ? "DMSans-Thin" : "DMSansThin",
        extraLight: isIOS() ? "DMSans-ExtraLight" : "DMSansExtraLight",
        extraBold: isIOS() ? "DMSans-ExtraBold" : "DMSansExtraBold",
        bold: isIOS() ? "DMSans-Bold" : "DMSansBold"
    }
}
