/**
 * Created by madhan on 7/6/17.
 */
/**
 * Created by madhan on 6/27/17.
 */

import React, {Component} from 'react';
import { StyleSheet, View, Image,Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends Component{
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('./images/cat1.jpg')} style={styles.logo}/>
                    <Text style={styles.title}>An app for GitHub</Text>
                </View>
                <View >
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#34cdc3'
    },
    logo: {
        width: 95,
        height: 118
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    title: {
        color: '#FFF',
        width: 160,
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.9

    }
})