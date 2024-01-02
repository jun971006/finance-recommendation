import React, { createRef, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { screenMap } from '../navigation/screenMap';

const SignInScreen = ({navigation}) => {

  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const passwordInputRef = createRef<TextInput>;

  const handleSubmitPress = () => {
    if(!userId) {
      alert('아이디를 입력해주세요...!');
      return;
    }

    if(!userPassword) {
      alert('비밀번호를 입력해주세요...!');
      return;
    }


  }


  return(
    <View style={styles.container}>
      <View style={styles.topArea}>
        {/* <View style={styles.TextArea}>
          <Text style={styles.Text}>로그인 페이지에요</Text>
        </View> */}
          <Text style={styles.Text}>로그인 페이지에요</Text>
      </View>
        


      <View style={styles.formArea}>
        <TextInput style={styles.textFormTop}
          placeholder='아이디'
          onChangeText={(userId) => setUserId(userId)}
          returnKeyType='next'
          autoCapitalize='none'
          onSubmitEditing={() => {
            
          }}
          blurOnSubmit={false}
          underlineColorAndroid="#f000"
        />

        <TextInput style={styles.textFormBottom}
          placeholder='비밀번호'
          onChangeText={(userPassword) => setUserPassword(userPassword)}
          returnKeyType='next'
          keyboardType='default'
          onSubmitEditing={Keyboard.dismiss}
          secureTextEntry={true}
          ref={passwordInputRef}
          blurOnSubmit={false}
        />
      </View>

      <View style={{flex: 0.75, alignItems: 'center',}} >
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={handleSubmitPress}>
            <Text style={{color: 'white'}}>로그인</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={styles.TextRegister}
          onPress={() => navigation.navigate(screenMap.SignUp)}>
          회원이 아니시면, 회원가입을 해주세요..!
        </Text>
      </View>

      
      <StatusBar style="auto" />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 7,
    paddingRight: 7,
  },

  TextArea: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
  Text:{

  },

  formArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    height:'50%'
  },

  topArea: {
    
    alignItems: 'center',
    paddingTop: 2,
  },

  textFormTop: {
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
  
  textFormBottom: {
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

  TextRegister: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'underline',
    paddingTop: 10,
  },
});

export default SignInScreen;