import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../../styles/colors';
import {
    Confirmation,
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
    </StackRoutes.Navigator>
)

export default AppRoutes;