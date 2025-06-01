import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import Header from '../../components/header';
import QuestionOption from '../../components/question-option';
import { MediumText } from '../../components/text';
import { RootStackParamList } from '../../routes/RootStack';
import { questions } from '../../utils/data';
import { styles } from './style';

type NavigationProp = NativeStackScreenProps<RootStackParamList, 'Questionnaire'>;

export const QuestionnaireScreen = ({ navigation }: NavigationProp) => {
    const pagerRef = useRef<PagerView>(null);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
    const [currentPage, setCurrentPage] = useState(0);

    const handleSelect = (optionIdx: number) => {
        const updated = [...answers];
        updated[currentPage] = optionIdx;
        setAnswers(updated);
        // Move to next question or submit
        if (currentPage < questions.length - 1) {
            pagerRef.current?.setPage(currentPage + 1);
            setCurrentPage(currentPage + 1);
        } else {
            // Calculate score and navigate
            const totalScore = updated.reduce((sum: number, idx, qIdx) => {
                if (idx === null) return sum;
                return sum + questions[qIdx].options[idx].score;
            }, 0);
            navigation.navigate('FinalResult', { score: totalScore });
        }
    };

    return (
        <View style={styles.container}>
            <Header title="Assessments" backArrowShown={false} />
            <PagerView
                ref={pagerRef}
                style={styles.pager}
                scrollEnabled={false}
                initialPage={0}
                onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
            >
                {questions.map((q, qIdx) => (
                    <View style={styles.page} key={q.id}>
                        <MediumText size={5.2} textStyles={styles.questionTitle}>{`Q${qIdx + 1}. ${q.text}`}</MediumText>
                        <View style={styles.optionsList}>
                            {q.options.map((opt, optIdx) => (
                                <QuestionOption
                                    key={opt.label}
                                    label={opt.label}
                                    selected={answers[qIdx] === optIdx}
                                    onPress={() => handleSelect(optIdx)}
                                    style={styles.optionSpacing}
                                />
                            ))}
                        </View>
                        <MediumText size={3.5} textStyles={styles.questionCounter}>{`Question ${qIdx + 1} of ${questions.length}`}</MediumText>
                    </View>
                ))}
            </PagerView>
        </View>
    );
};

export default QuestionnaireScreen; 