// PublicacionList.js
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

const PublicacionList = () => {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        axios.get('http://10.12.9.57:3000/posts')
        .then(response => setPublicaciones(response.data))
        .catch(error => console.error(error));
    }, []);

    const renderPublicacion = ({ item }) => (
        <View style={styles.publicacionContainer}>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        </View>
    );

    return (
        <FlatList
        data={publicaciones}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPublicacion}
        />
    );
    };

    const styles = StyleSheet.create({
    publicacionContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
    },
});

export default PublicacionList;
