import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 500,
        
    },

    gradient: {
        flex: 1,
        padding: 24,
        justifyContent: "flex-end",
    },

    classification: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "#FE7300",
        width: 32,
        height: 32,
        marginBottom: 7, 
        textAlign: "center",
        textAlignVertical: "center",
        
    },
    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 7,
    },

    type:{
        color: "#fff",
        fontSize: 16,
        marginBottom: 7,
    },

    duration: {
        color: "#fff",
        fontSize: 16,
    },

})