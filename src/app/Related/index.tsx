import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { styles } from './styles';

export function Related() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Image 
                        source={require('../../assets/episode-1.jpg')} 
                        style={styles.image} 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image 
                        source={require('../../assets/episode-2.jpg')} 
                        style={styles.image} 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image 
                        source={require('../../assets/episode-3.jpg')} 
                        style={styles.image} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}