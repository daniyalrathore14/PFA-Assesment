export interface QuestionOption {
    label: string;
    score: number;
}

export interface Question {
    id: number;
    text: string;
    options: QuestionOption[];
}

export const questions: Question[] = [
    {
        id: 1,
        text: 'How would you describe your investment knowledge?',
        options: [
            { label: 'Novice', score: 1 },
            { label: 'Intermediate', score: 2 },
            { label: 'Advanced', score: 3 },
        ],
    },
    {
        id: 2,
        text: 'Investment Duration',
        options: [
            { label: 'Short-term (less than 1 year)', score: 1 },
            { label: 'Medium-term (1-5 years)', score: 2 },
            { label: 'Long-term (more than 5 years)', score: 3 },
        ],
    },
    {
        id: 3,
        text: 'How comfortable are you with taking risks?',
        options: [
            { label: 'Very risk-averse', score: 1 },
            { label: 'Somewhat risk-averse', score: 2 },
            { label: 'Neutral', score: 3 },
            { label: 'Somewhat risk-tolerant', score: 4 },
            { label: 'Very risk-tolerant', score: 5 },
        ],
    },
    {
        id: 4,
        text: 'What percentage of your income are you willing to invest?',
        options: [
            { label: 'Less than 10%', score: 1 },
            { label: '10-25%', score: 2 },
            { label: '25-50%', score: 3 },
            { label: 'More than 50%', score: 4 },
        ],
    },
    {
        id: 5,
        text: 'How would you react to a sudden drop in the value of your investments?',
        options: [
            { label: 'Panic and sell immediately', score: 1 },
            { label: 'Monitor closely and consider selling', score: 2 },
            { label: 'Hold and wait for recovery', score: 3 },
            { label: 'See it as a buying opportunity and invest more', score: 4 },
        ],
    },
]; 