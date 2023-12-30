import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../modules/redux/Store';
import * as userAction from "../modules/redux/slices/TemplateUserSlice"
import {Link, useNavigation} from 'expo-router'
import {screenMap} from '../navigation/screenMap';

const ReduxTestScreen = () => {
    const currentUser = useSelector((state:RootState) => state.templateUser)
    console.log("current : " + currentUser.name)

    const user = {name : "Redux Test"};

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userAction.setName(user.name))
    }, [user.name])

    const afterUser = useSelector((state:RootState) => state.templateUser)

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Hello, {afterUser.name}</Text>
            <StatusBar style="auto" />

            <Button title="Go to Signup"
              onPress={() => navigation.navigate('SignUp')} 
            />

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

export default ReduxTestScreen;