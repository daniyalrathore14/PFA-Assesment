import React from 'react';
import { View, Pressable } from 'react-native';
import { LargeText, MediumText } from '../text';
import { styles } from './style';

interface HeaderProps {
    title: string;
    backArrowShown?: boolean;
    onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, backArrowShown = true, onBackPress }) => {
    return (
        <View style={styles.header}>
            {backArrowShown ? (
                <Pressable onPress={onBackPress} hitSlop={10}>
                    <MediumText size={6} textStyles={styles.backArrow}>{'←'}</MediumText>
                </Pressable>
            ) : (
                <View style={{ width: styles.backArrow.fontSize }} />
            )}
            <LargeText size={5.5} textStyles={styles.headerTitle}>{title}</LargeText>
            <View style={{ width: styles.backArrow.fontSize }} />
        </View>
    );
};

export default Header; 