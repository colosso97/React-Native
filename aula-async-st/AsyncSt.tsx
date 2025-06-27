import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncSt() {
    const [input, setInput] = useState("");
    const [nome, setNome] = useState("");

    async function gravarNome() {
        await AsyncStorage.setItem("@nome", input);
        setNome(input);
        setInput("");
    }

    useEffect(() => {
        async function loadData() {
            const value = await AsyncStorage.getItem("@nome");
            if (value !== null) {
                setNome(value);
            }
        }

        loadData();
    }, [])
    return (
        <View style={styles.container}>
            <Text>Nome: </Text>
            <TextInput style={styles.input} value={input} onChangeText={setInput} />
            <TouchableOpacity style={styles.botao} onPress={gravarNome}>
                <Text style={styles.texto}>Gravar</Text>
            </TouchableOpacity>
            <Text> Nome: {nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "gray",
        width: "50%"
    },
    texto: {
        color: "#fff",
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: "green",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 30,
        margin: 10
    }
});
