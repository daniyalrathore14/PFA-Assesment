import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Header from '../../components/header';
import { LargeText, MediumText } from '../../components/text';
import { RootStackParamList } from '../../routes/RootStack';
import { styles } from './style';

type NavigationProp = NativeStackScreenProps<RootStackParamList, 'FinalResult'>;

const getRiskProfile = (score: number) => {
    if (score <= 7) return { profile: 'Low', emoji: '🟢' };
    if (score <= 13) return { profile: 'Medium', emoji: '🟡' };
    return { profile: 'High', emoji: '🔴' };
};

const FinalResultScreen = ({ navigation, route }: NavigationProp) => {
    const { score } = route.params;
    const { profile, emoji } = getRiskProfile(score);

    return (
        <View style={styles.container}>
            <Header title="Result" backArrowShown onBackPress={() => navigation.goBack()} />
            <View style={styles.resultCard}>
                <MediumText size={14} textStyles={styles.resultEmoji}>{emoji}</MediumText>
                <LargeText size={6} textStyles={styles.resultText}>Your Risk Profile</LargeText>
                <MediumText size={4.5} textStyles={styles.scoreText}>{`Score: ${score}`}</MediumText>
                <MediumText size={5} textStyles={styles.profileText}>{profile}</MediumText>
            </View>
        </View>
    );
};

export default FinalResultScreen; 