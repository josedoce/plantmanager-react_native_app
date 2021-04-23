import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../../styles/colors';
import { MyPlants, PlantSelect } from '../pages';
import { MaterialIcons } from '@expo/vector-icons';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: 0,
                    height: 60,
                }
            }}
        >
            <AppTab.Screen
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: ({size, color})=>( //os parametros vem da tabBarOptions
                        <MaterialIcons 
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
             <AppTab.Screen
                name="Minhas Plantas"
                component={MyPlants}
                options={{
                    tabBarIcon: ({size, color})=>( //os parametros vem da tabBarOptions
                        <MaterialIcons 
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </AppTab.Navigator>
    )
}
export default AuthRoutes;