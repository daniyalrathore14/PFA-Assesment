import React from 'react';
import { Pressable } from 'react-native';
import { MediumText } from '../text';
import { colors } from '../../utils/app-colors';
import { styles } from './style';

interface QuestionOptionProps {
    label: string;
    selected?: boolean;
    onPress: () => void;
    style?: any;
}

const QuestionOption = ({ label, selected, onPress, style }: QuestionOptionProps) => {
    return (
        <Pressable
            style={[styles.option, selected && styles.selected, style]}
            onPress={onPress}
        >
            <MediumText color={selected ? colors.white : colors.black} textAlign="center">
                {label}
            </MediumText>
        </Pressable>
    );
};

export default QuestionOption; 