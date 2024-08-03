
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { styles } from './styles';

export function Details() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Sinopse</Text>
                <Text style={styles.sinopse}>
                    Três anos após a Primeira Batalha de Geonosis e o início das Guerras Clônicas,
                    os nobres Cavaleiros Jedi da Ordem Jedi têm liderado um vasto exército de clones em uma batalha galáctica contra a
                    Confederação dos Sistemas Independentes. O Chanceler Supremo da República Galáctica revela sua verdadeira natureza 
                    como um Lord Sith ao revelar um plano para governar a galáxia, transformando a República em um Império Galáctico.
                    O herói de guerra Jedi, Anakin Skywalker, é seduzido pelo lado sombrio da Força e se torna o novo aprendiz de Darth Sidious 
                    — Darth Vader. Os Jedi são praticamente exterminados, com Obi-Wan Kenobi e o Mestre Jedi Yoda sobrevivendo ao evento e forçados 
                    a se esconder. A única esperança para a galáxia são os próprios descendentes de Anakin —
                    os filhos gêmeos nascidos em segredo que crescerão para se tornar Luke Skywalker e Leia Organa.
                </Text>
            </ScrollView>
        </View>
    );
}