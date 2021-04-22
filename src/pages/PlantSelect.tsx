import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { EnviromentButton, Header } from '../components';
import { Load } from '../components/Load';
import { PlantCardPrimary } from '../components/PlantCardPrimary';


import api from '../services/api';
interface EnviromentProp{
    key: string;
    title: string;
}
interface PlantsProp{
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number,
        repeat_every: string
    }
}
export function PlantSelect(){
    //categorias
    const [enviroments, setEnviroments] = useState<EnviromentProp[]>([]);
    //plantas
    const [plants, setPlants] = useState<PlantsProp[]>([]);
    //plantas filtradas pela categoria
    const [filteredPlants, setFilteredPlants] = useState<PlantsProp[]>([]);
    //categoria selecionada
    const [enviromentSelected, setEnviromentSelected] = useState("all");
    //animação loading
    const [loading, setLoading] = useState(true);

    //paginação
    const [page, setPage] = useState(1);
    //tem mais loading ?
    const [loadingMore, setLoadingMore] = useState(false);
    //carregou tudo
    const [loadedAll, setLoadedAll] = useState(false);

    async function fetchPlants(){
        const{data} = await api
        .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
        if(!data){
            setLoading(true);
        }
        if(page>1){//pegando o estado antigo e concatenando com o novo
            setPlants(oldValue=>[...oldValue, ...data]);
            setFilteredPlants(oldValue=>[...oldValue, ...data]);
        }else{
            setPlants(data);
            setFilteredPlants(data);
        }
        
        setLoading(false);
        setLoadingMore(false);
    }
    //evento de rolagem
    function handleFetchMore(distance: number){
        if(distance<1){
            return;
        }
        setLoadingMore(true);
        //vai virar pagina 2
        setPage(oldValue=>oldValue+1);
        fetchPlants();
    }
    //evento de filtragem
    function handleEnviromentSelected(enviroment: string){

        setEnviromentSelected(enviroment);

        if(enviroment=='all')
            return setFilteredPlants(plants);
        const filtered = plants.filter((plant)=>
            plant.environments.includes(enviroment)
        );
        setFilteredPlants(filtered);
    }
    
    //pegando as categorias
    useEffect(()=>{
        async function fetchEnviroment(){
            const{data} = await api
            .get('plants_environments?_sort=title&_order=asc');
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }
        fetchEnviroment();
    },[]);
    //pegando as plantas
    useEffect(()=>{
        fetchPlants();
    },[]);
    //apresente loading se o carregamento estiver verdadeiro
    if(loading){
        return <Load/>
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>
            </View>
            <View>
                <FlatList
                    data={enviroments}
                    renderItem={({item, index})=>(
                        <EnviromentButton
                            key={index}
                            title={item.title}
                            active={item.key===enviromentSelected}
                            onPress={()=>handleEnviromentSelected(item.key)}
                        />
                        )
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>
            <View style={styles.plant}>
                <FlatList
                    data={filteredPlants}
                    renderItem={({item, index})=>(
                        <PlantCardPrimary
                        key={index}
                        data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1} // quando chegar a 10% do final faça:
                    onEndReached={({distanceFromEnd})=>handleFetchMore(distanceFromEnd)}//isso acontecer
                    ListFooterComponent={
                        loadingMore?
                        <ActivityIndicator color={colors.green}/>
                        :<></>
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 32,
        marginVertical: 32,
    },
    plant: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
   
    
})