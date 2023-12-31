import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {screenMap} from '../navigation/screenMap'

const HomeScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false)

      // 여기서 user 정보 가져오기 
      // user 정보 있으면 바로 home
      // 여기서는 일단 Auth로 이동
      navigation.replace('Auth')

    }, 1000)
  }, [])

    return(
        <View style={styles.container}>
            <Text>메인 페이지입니다.</Text>
            <StatusBar style="auto" />
            
            {/* <Button 
              title="Go to SignUp Page"
              onPress={() => navigation.navigate(screenMap.SignUp)}  
            /> */}

            <ActivityIndicator
              animating={animating}
              color="#6990F7"
              size="large"
              style={styles.activityIndicator}
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
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

export default HomeScreen;