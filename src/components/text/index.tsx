import React from 'react';
import { Pressable, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { colors } from '../../utils/app-colors';
import { width } from '../../utils/dimensions';

// Define font family types
export const FontFamily = {
    appFontBold: 'System',
    appFontRegular: 'System',
} as const;

type FontFamilyType = 'bold' | 'regular' | 'medium';

interface TextComponentProps {
    children?: string;
    color?: string;
    textStyles?: TextStyle;
    size?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textProps?: TextProps;
    onPress?: () => void;
    fontFamily?: FontFamilyType;
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
}

export const LargeText = ({
    children = '',
    color = colors.black,
    textStyles = {},
    size = 6.5,
    textAlign = 'auto',
    textProps,
    onPress = undefined,
    fontFamily = 'bold',
}: TextComponentProps) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: width(size),
            color: color,
            textAlign: textAlign,
            fontFamily: fontFamily,
        },
    });

    return (
        <Pressable disabled={typeof onPress === 'undefined'} onPress={onPress}>
            <Text style={[styles.text, textStyles]} {...textProps}>
                {children}
            </Text>
        </Pressable>
    );
};

export const MediumText = ({
    children = '',
    size = 4.5,
    textAlign,
    color = colors.black,
    textStyles,
    textProps,
    onPress = undefined,
    fontFamily = 'bold',
}: TextComponentProps) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: width(size),
            color: color,
            textAlign: textAlign,
            fontFamily: fontFamily,
        },
    });

    return (
        <Pressable disabled={typeof onPress === 'undefined'} onPress={onPress}>
            <Text style={[styles.text, textStyles]} {...textProps}>
                {children}
            </Text>
        </Pressable>
    );
};

export const SmallText = ({
    children = '',
    size = 4,
    textAlign,
    color = colors.black,
    textStyles,
    textProps,
    onPress = undefined,
    fontFamily = 'bold',
}: TextComponentProps) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: width(size),
            color: color,
            textAlign: textAlign,
            fontFamily: fontFamily,
        },
    });

    return (
        <Pressable disabled={typeof onPress === 'undefined'} onPress={onPress}>
            <Text style={[styles.text, textStyles]} {...textProps}>
                {children}
            </Text>
        </Pressable>
    );
};

export const UnderLineText = ({
    children = '',
    size = 4.5,
    textAlign,
    color = colors.black,
    textStyles,
    textProps,
    onPress = undefined,
    textDecorationLine = 'underline',
    fontFamily = 'bold',
}: TextComponentProps) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: width(size),
            color: color,
            textAlign: textAlign,
            textDecorationLine: textDecorationLine,
            fontFamily: fontFamily,
        },
    });

    return (
        <Pressable disabled={typeof onPress === 'undefined'} onPress={onPress}>
            <Text style={[styles.text, textStyles]} {...textProps}>
                {children}
            </Text>
        </Pressable>
    );
}; 