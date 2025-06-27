import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native';

type StackParamList = {
    Dicas: undefined;
    SaibaMais: undefined;
}
export default function Home() {
    const navigation = useNavigation<NavigationProp<StackParamList>>();
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>Palacio de cristal</Text>
                <Image style={styles.img}
                    source={require("../../../assets/palacio-de-cristal.jpg")}
                />
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("Dicas")}>
                    <Text style={styles.buttonText}>Dicas</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}