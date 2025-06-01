import { Dimensions } from 'react-native';

const width = (number: number) => {
    const fullWidth = Dimensions.get('window').width;
    if (number >= 100) return fullWidth;
    if (number <= 0) return 0;
    return fullWidth * (number / 100);
};

const height = (number: number) => {
    const fullHeight = Dimensions.get('window').height;
    if (number >= 100) return fullHeight;
    if (number <= 0) return 0;
    return fullHeight * (number / 100);
};

export { width, height }; 