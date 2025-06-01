import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from './style';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    isLoading?: boolean;
    disabled?: boolean;
}

export const Button = ({
    title,
    onPress,
    variant = 'primary',
    isLoading = false,
    disabled = false,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                styles[variant],
                disabled && styles.disabled,
            ]}
            onPress={onPress}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color={styles[variant].color} />
            ) : (
                <Text style={[styles.text, styles[`${variant}Text`]]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}; 