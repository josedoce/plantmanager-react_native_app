## Aplicativo plantmanages

### libs e apis utilizadas
$ expo intall package_name
>$@expo/vector-icons para usar icones

#### carregamento de fonte
>$ expo-font & @expo-google-fonts/nome-da-font para usar fontes externas
>$ expo-app-loading usado para manipular o splash(tela de load)

#### para navegação entre paginas: 
https://reactnavigation.org/docs/getting-started

>$ yarn add @react-navigation/native
com o expo é necessario:
>$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
>$ yarn add @react-navigation/stack

#### para simulação de servidor
>yarn add json-server

> $ json-server arquivo.json --host 'ip' --port 'porta'

#### usando svg em projeto react
> $ expo install react-native-svg

#### usando o lottie para animações de load
> https://lottiefiles.com/featured
> expo install lottie-react-native

#### salvando os dados no dispositivo com o AsyncStorage

>https://docs.expo.io/versions/latest/sdk/async-storage/
>salvando:
```ts
//chave,valor
        /*usando o asyncStorage
        padrão de nomeação
        @nome_do_app:o_que_estamos_salvando
        */
        await AsyncStorage.setItem('@plantmanager:user',name);
```
>pegando:
```ts
const [userName, setUserName] = useState<string>();

    useEffect(()=>{
        async function loadStorageUserName(){
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user?user:'');
        }
        loadStorageUserName();
    }, []);
```

#### seleção de datas DateTimePicker:

>https://docs.expo.io/versions/latest/sdk/date-time-picker/
> $ expo install @react-native-community/datetimepicker

#### manipulaçao de data e horas com a lib date-fns:
>https://date-fns.org/docs/Getting-Started
>$ yarn add date-fns

#### usando tab navigation(menu inferior):

>https://reactnavigation.org/docs/tab-based-navigation
>$ yarn add @react-navigation/bottom-tabs