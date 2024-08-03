import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252525",
        alignItems: "center",
        justifyContent: "center",

    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
    },
    button: {
        borderRadius: 8,
        overflow: 'hidden',
        marginHorizontal: 8, 
    },

    image: {
        width: 100, 
        height: 150, 
        resizeMode: 'cover', 
    },
})