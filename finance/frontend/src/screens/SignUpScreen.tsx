import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SignUpScreen = () => {

  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');

  const handleSubmitPress = () => {
    if(!userName) {
      alert('이름을 입력해주세요...!');
      return;
    }

    if(!userId) {
      alert('아이디를 입력해주세요...!');
      return;
    }

    if(!userPassword) {
      alert('비밀번호를 입력해주세요...!');
      return;
    }

    if(userPassword != userPasswordCheck) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요...!');
      return;
    }


  }

  return(
      <View style={styles.container}>
        <View>
          <Text>회원가입 페이지입니다..!</Text>
        </View>

        <View>
          <TextInput
            placeholder='이름을 입력하세요'
            onChangeText={(userName) => setUserName(userName)}
            blurOnSubmit={false}             
            returnKeyType="next"

          />
          <TextInput
            placeholder='아이디를 입력하세요(영문, 숫자)'
            onChangeText={(userId) => setUserId(userId)}
            blurOnSubmit={false}             
            returnKeyType="next"

          />
          <TextInput
            placeholder='비밀번호를 입력하세요(8자 이상)'
            onChangeText={(userPassword) => setUserPassword(userPassword)}
            secureTextEntry={true}             
            returnKeyType="next"
            blurOnSubmit={false}   
          />
          <TextInput
            placeholder='비밀번호 확인'
            onChangeText={(userPasswordCheck) => setUserPasswordCheck(userPasswordCheck)}
            secureTextEntry={true}
            returnKeyType="next"
            blurOnSubmit={false}             
          />


        </View>
          
        <View style={{flex: 0.75, alignItems: 'center',}} >
          <View>
            <TouchableOpacity onPress={handleSubmitPress}>
              <Text style={{color: 'white'}}>로그인</Text>
            </TouchableOpacity>
          </View>
          <Text>
            소셜미디어로 로그인하기..!
          </Text>
        </View>

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