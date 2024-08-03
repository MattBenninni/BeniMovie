import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252525",
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
        justifyContent: 'center',  // Alinha o conteúdo verticalmente
    },
    title: {
        color: "#ffffff",
        fontSize: 22,
        marginBottom: 22,
    },
    sinopse: {
        color: "#c4c4c4",
        fontSize: 16,
        lineHeight: 24,
    },
})