import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { styles } from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

type StackParamList = {
    SaibaMais: undefined;
}


export default function Dicas() {
    const navigation = useNavigation<NavigationProp<StackParamList>>();
    return (
        <View style={styles.container}>
            <Modal visible={true} transparent={true} animationType='fade'>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ullam delectus commodi, corrupti sed aspernatur nam omnis? Officia iure autem esse consequuntur laboriosam consectetur quaerat provident? Accusantium fugit inventore earum.</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SaibaMais")}>
                            <Text>Saiba mais</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}