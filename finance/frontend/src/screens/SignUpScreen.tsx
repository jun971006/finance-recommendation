import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SignUpScreen = () => {

    return(
        <View style={styles.container}>
            <Text>회원가입 페이지야</Text>
            <StatusBar style="auto" />

            
        </View>

        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreen;