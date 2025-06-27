import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    card:{
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 8,
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    text:{
        fontWeight: "bold",
        fontSize: 20
    },
    img:{
        width: 150,
        height:150
    },
    button:{
        padding:5,
        margin: 5,
        backgroundColor:"#114d78",
        borderRadius: 8,

    },
    buttonText:{
        color: "#fff",
    }
})