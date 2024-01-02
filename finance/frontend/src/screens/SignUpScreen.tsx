import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { screenMap } from '../navigation/screenMap';

const SignUpScreen = ({navigation}) => {

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
        <View style={styles.topArea}>
          <Text>회원가입 페이지입니다..!</Text>
        </View>

        <View style={styles.formArea}>
          <TextInput style={styles.textInputTop}
            placeholder='이름을 입력하세요'
            onChangeText={(userName) => setUserName(userName)}
            blurOnSubmit={false}             
            returnKeyType="next"

          />
          <TextInput style={styles.textInputMiddle1}
            placeholder='아이디를 입력하세요(영문, 숫자)'
            onChangeText={(userId) => setUserId(userId)}
            blurOnSubmit={false}             
            returnKeyType="next"

          />
          <TextInput style={styles.textInputMiddle2}
            placeholder='비밀번호를 입력하세요(8자 이상)'
            onChangeText={(userPassword) => setUserPassword(userPassword)}
            secureTextEntry={true}             
            returnKeyType="next"
            blurOnSubmit={false}   
          />
          <TextInput style={styles.textInputBottom}
            placeholder='비밀번호 확인'
            onChangeText={(userPasswordCheck) => setUserPasswordCheck(userPasswordCheck)}
            secureTextEntry={true}
            returnKeyType="next"
            blurOnSubmit={false}             
          />


        </View>
          
        <View style={{flex: 0.75, alignItems: 'center',}} >
          <View style={styles.btnArea}>
            <TouchableOpacity onPress={handleSubmitPress}>
              <Text style={{color: 'white'}}>회원가입</Text>
            </TouchableOpacity>
          </View>
          {/* <Text >
            소셜미디어로 회원가입하기..!
          </Text> */}
          <Text
            style={styles.TextLogin}
            onPress={() => navigation.navigate(screenMap.SignIn)}>
            이미 회원이시면, 로그인을 해주세요..!
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
    flexDirection: 'column',
    justifyContent: 'center',
  },

  topArea: {
    alignItems: 'center',
    paddingTop: 2,
  },
  
  formArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height:'50%'
  },

  textInputTop: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: '35%',
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
  },

  textInputMiddle1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    width: '35%',
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
  },

  textInputMiddle2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    width: '35%',
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
  },

  textInputBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: 'black',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '35%',
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
  },
  
  btnArea: {
    paddingTop: 15,
    height: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    width:'35%',
  },

  TextLogin: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'underline',
    paddingTop: 10,
  },
});

export default SignUpScreen;