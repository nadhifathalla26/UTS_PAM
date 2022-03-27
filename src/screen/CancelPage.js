import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, FlatList, 
    View, Image, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Cancel = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#fff" />
            <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.cancelText}>Tidak Ada Pesanan</Text>
            </View>
            <View style={styles.bottomBar}>
                <View style={styles.navbar}>
                    <TouchableOpacity
                        style={styles.buttonbottomBar}
                        onPress= {() => navigation.navigate('Home')}>
                        <Icon name="home" size={30} color='#283593'/>
                        <Text style={styles.buttonbarText}>Beranda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonbottomBar}
                        onPress= {() => navigation.navigate('Order')}>
                        <Icon name="book" size={30} color='#283593'/>
                        <Text style={styles.buttonbarText}>Pesanan Saya</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonbottomBar}
                        onPress= {() => navigation.navigate('Cancel')}>
                        <Icon name="ban" size={30} color='#283593'/>
                        <Text style={styles.buttonbarText}>Pembatalan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonbottomBar}
                        onPress= {() => navigation.navigate('Home')}>
                        <Icon name="grip-lines" size={30} color='#283593'/>
                        <Text style={styles.buttonbarText}>Lainnya</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    images: {
        height: 200,
        width: 200,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
    },
    bottomBar: { 
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 0,
        marginVertical: 0,
    },
    navbar: {
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
    },
    buttonbottomBar: {
        marginHorizontal: 23,
        alignItems: 'center' 
    },
    buttonbarText: {
        color: '#283593',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
    },
    titleForm: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    cancelText: {
        color: '#283593',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 20    
    },
});

export default Cancel;