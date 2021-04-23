import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../../styles/colors';
import {
    Confirmation,
    PlantSave,
    PlantSelect,
    UserIdentification,
    Welcome,
    MyPlants
} from '../pages';
import AuthRoutes from './tab.routes';

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
            component={AuthRoutes}
        />
        <StackRoutes.Screen
            name="PlantSave"
            component={PlantSave}
        />
        <StackRoutes.Screen
            name="MyPlants"
            component={AuthRoutes}
        />
    </StackRoutes.Navigator>
)

export default AppRoutes;