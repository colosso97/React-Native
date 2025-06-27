import { NavigationProp, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { View, Text, Button } from 'react-native'

type StackParamsList = {
    Home: undefined;
    Sobre:{
        nome: string;
        email: string;
    };
    Contato: undefined;
};

export default function Home() {
    const navigation = useNavigation<NavigationProp<StackParamsList>>();
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Ir para Sobre"
            onPress={() => navigation.navigate("Sobre",{nome:"Marcelo",email:"marcelovidal.ml@gmail.com"})}
            />
        </View>
    )
}