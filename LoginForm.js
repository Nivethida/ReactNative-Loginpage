/**
 * Created by madhan on 7/6/17.
 */
/**
 * Created by madhan on 6/28/17.
 */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, ActivityIndicator} from 'react-native';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            showProgress: false
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput placeholder="username or email" style={styles.input}
                           returnKeyType="next" onSubmitEditing={()=>this.passwordInput.focus()}
                           keyboardType="email-address" autoCorrect={false} autoCapitalize="none"
                onChangeText={(text)=>this.setState({username: text})}>
                </TextInput>
                <TextInput placeholder="password" style={styles.input}
                           secureTextEntry returnKeyType="go" ref={(input)=>this.passwordInput = input}
                onChangeText={(text)=>this.setState({password: text})}>
                </TextInput>
                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={this.onLoginPressed.bind(this)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <ActivityIndicator animating={this.state.showProgress} size="large" style={styles.loader}/>
            </View>
        )
    }
    onLoginPressed(){
        console.warn('Attempting to log in'+this.state.username);
        this.setState({showProgress: true})
        fetch('https://api.github.com/search/repositories?q=react')
            .then((response)=>{
            return response.json();
            })
            .then((results)=>{
            console.log(results);
            this.setState({showProgress: false});
            });
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign:'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    loader:{
        marginTop: 20
    }
})