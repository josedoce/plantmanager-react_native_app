import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

export interface PlantProps{
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number,
        repeat_every: string
    },
    dateTimeNotification: Date;
}

//[var: tipo]:{} = objeto dinamico
interface StoragePlantProps{
    [id: string]:{
        data: PlantProps;
    }
}

export async function savePlant(plant: PlantProps): Promise<void>{
    try{
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        //o tipo de data tem que ser como storagePlantProps
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps):{};
        const newPlant = {
            [plant.id]:{
                data: plant
            }
        }
        await AsyncStorage.setItem('@plantmanager:plants',
        JSON.stringify({
            ...newPlant,
            ...oldPlants
        })
        );
    }catch(error){
        throw new Error(error);
    }
}

export async function loadPlant(): Promise<PlantProps[]>{
    try{
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        //o tipo de data tem que ser como storagePlantProps
        const plants = data ? (JSON.parse(data) as StoragePlantProps):{};
        
        //tranformando e organizando data em data de save
        const plantsSorted = Object
        .keys(plants)
        .map((plant)=>{
            return{
                ...plants[plant].data,
                hour: format(new Date(plants[plant].data.dateTimeNotification),'HH:mm')
            }
        })
        .sort((a, b)=> Math.floor( new Date(a.dateTimeNotification).getTime()/1000 - Math.floor(new Date(b.dateTimeNotification).getTime()/1000)));
        return plantsSorted;
    }catch(error){
        throw new Error(error);
    }
}