import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,Dimensions,AsyncStorage,TouchableOpacity, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button'


const {width}=Dimensions.get("window");

export default class SwiperPage extends Component{
    // 把是否安装过存在当地
    start=()=>{
        // 存储完，再执行
        AsyncStorage.setItem("isInstall","true",()=>{
            this.props.afterInstall();
        });  
    }

    render(){
        return(
                <Swiper showsButtons={false}
                    autoplay={true}
                >
                    {/* showsButtons是左右箭头 */}
                    <View style={styles.slide}>
                        <Image style={styles.img} source={require("../../img/work/page.jpg")}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.img} source={require("../../img/work/page.jpg")}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.img} source={require("../../img/work/page.jpg")}/>
                        <TouchableOpacity onPress={this.start} style={styles.start}>
                            <Text style={{color:"#fff"}}>开始体验</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
        )
    }
}

const styles=StyleSheet.create({
    slide:{
        flex:1,
        // width:width,
        height:"100%",
        alignItems:"center",
        
    },
    img:{
        width:width,
        // width:"100%",
        height:"100%",
    },
    start:{
        position:"absolute",
        bottom:100,
        width:100,
        height:40,
        backgroundColor:"#f23030",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    }
})