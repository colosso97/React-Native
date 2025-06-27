import { styles } from "./styles";

import { View, Text, Button } from 'react-native'
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";

type StackParamsList = {
    Home: undefined;
};

export default function Contato() {
    const navigation = useNavigation<NavigationProp<StackParamsList>>();
    
    return (
        <View style={styles.container}>
            <Text>Contato</Text>
            <Button title="Tela de Início"
            onPress={()=> navigation.dispatch(StackActions.popToTop())}
            // onPress={() => navigation.navigate("Home")}
        />
        </View>
    )
}