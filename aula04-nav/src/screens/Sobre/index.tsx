import { styles } from "./styles";

import { View, Text, Button } from 'react-native'
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type RouteSobreParams = {
    Sobre: {
        nome: string;
        email: string;
    };
};

type StackParamsList = {
    Home: undefined;
    Sobre:{
        nome: string;
        email: string;
    };
    Contato: undefined;
};

type SobreRouteProps = RouteProp<RouteSobreParams, 'Sobre'>;

export default function Sobre() {
    const route = useRoute<SobreRouteProps>();
    const navigation = useNavigation<NavigationProp<StackParamsList>>();
    return (
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Text>{route.params.nome}</Text>
            <Text>{route.params.email}</Text>
            <Button title="Contato"
            onPress={() => navigation.navigate("Contato")}
            />
            <Text/>
            <Button title="Voltar"
            onPress={() => navigation.goBack()}/>
        </View>
    );
}