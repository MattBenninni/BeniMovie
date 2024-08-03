import { ImageBackground, Text } from "react-native";
import { styles } from "./styles";

import { LinearGradient } from 'expo-linear-gradient';

export function Cover(){
    return(
        <ImageBackground 
        source={require("../../assets/episode-3.jpg")}
        style={styles.image}>
            <LinearGradient 
            colors={["rgba(0,0,0,  0.2)", "#000"]}
            style={styles.gradient}>


            <Text style={styles.classification}>16</Text>
            <Text style={styles.title}>Star Wars: Episódio III - A Vingança dos Sith</Text>
            <Text style={styles.type}>Ficção Cientifica, Aventura, Ação, Fantasia</Text>
            <Text style={styles.duration}>2 horas e 20 minutos</Text>
            </LinearGradient>
        </ImageBackground>
    )
}