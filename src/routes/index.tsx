import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionnaireScreen from '../screens/questionnaire';
import FinalResultScreen from '../screens/final-result';
import { RootStackParamList } from './RootStack';



const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Questionnaire" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
            <Stack.Screen name="FinalResult" component={FinalResultScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator; 