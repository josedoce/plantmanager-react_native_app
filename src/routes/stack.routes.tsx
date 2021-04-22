import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../../styles/colors';
import {
    Confirmation,
    PlantSelect,
    UserIdentification,
    Welcome
} from '../pages';

const StackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
    <StackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}>
        <StackRoutes.Screen //será a primeira tela a abrir
            name="Welcome" 
            component={Welcome}
        />
        <StackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />
        <StackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
        <StackRoutes.Screen
            name="PlantSelect"
            component={PlantSelect}
        />
    </StackRoutes.Navigator>
)

export default AppRoutes;