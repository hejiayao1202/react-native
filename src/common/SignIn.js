import React, { Component } from 'react';
import {View,Text,StyleSheet,Dimensions,AsyncStorage,TouchableOpacity,TextInput,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {myFetch} from '../utils/index'
import { Icon } from '@ant-design/react-native';

const {width}=Dimensions.get("window");

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            againPwd:''
        }
    }
    sginin=()=>{
        // AsyncStorage.removeItem(this.state.username)
        // .then(()=>{
        //     console.log("ok");
        // })
        if(this.state.username==""||this.state.pwd==""){
            ToastAndroid.show("用户名和密码不能为空",ToastAndroid.SHORT);
        }else if(this.state.pwd!=this.state.againPwd){
            ToastAndroid.show("密码确认有误",ToastAndroid.SHORT);
        }else{
            myFetch.post('/sginin',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                // console.log(res.data.judge);
                if(res.data.judge==1){
                    ToastAndroid.show("用户已经注册过了",ToastAndroid.SHORT);
                }else if(res.data.judge==2){
                    ToastAndroid.show("注册失败",ToastAndroid.SHORT);
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        ToastAndroid.show("注册成功",ToastAndroid.SHORT);
                        Actions.login();  
                    })
                }       
            }); 
        }
             
    }
    username=(text)=>{
        this.setState({username:text})
    }
    pwd=(text)=>{
        this.setState({pwd:text})
    }
    againPwd=(text)=>{
        this.setState({againPwd:text})
    }

    render(){
        return(
            <View>
                {/* 标题栏 */}
                <View style={{
                        height:40,
                        flexDirection:"row",
                        backgroundColor:"#f23030",
                    }}> 
                        <TouchableOpacity
                            style={{
                                width:"30%",
                                height:34,
                                justifyContent:"center",
                                paddingLeft:"2%",
                            }}
                            onPress={()=>Actions.login()}
                        >
                            <Icon style={{fontSize:25}} color={"#ffffff"} name="left"/>
                        </TouchableOpacity>
                </View>

                {/* 注册输入框 */}
                <View style={{justifyContent:"center",alignItems:"center",height:"90%"}}>
                    <View style={{
                        height:42,
                        width:"70%",
                        borderColor:"#eeeeee",
                        borderWidth:1,
                        borderRadius:7,
                        backgroundColor:"#fff",
                        marginBottom:10,
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        alignItems:"center"
                    }}>
                        <Icon style={{fontSize:25,color:"#f23030"}} name="user"/>
                        <TextInput 
                            onChangeText={this.username}
                            placeholder="用户名"
                            style={{
                                height:40,
                                width:"87%",
                                backgroundColor:"#fff",
                        }}/>
                    </View>
                    <View style={{
                        height:42,
                        width:"70%",
                        borderColor:"#eeeeee",
                        borderWidth:1,
                        borderRadius:7,
                        backgroundColor:"#fff",
                        marginBottom:10,
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        alignItems:"center"
                    }}>
                        <Icon style={{fontSize:25,color:"#f23030"}} name="lock"/>
                        <TextInput 
                            onChangeText={this.pwd}
                            placeholder="密码"
                            secureTextEntry={true}
                            style={{
                                height:40,
                                width:"87%",
                                backgroundColor:"#fff",
                        }}/>
                    </View>
                    <View style={{
                        height:42,
                        width:"70%",
                        borderColor:"#eeeeee",
                        borderWidth:1,
                        borderRadius:7,
                        backgroundColor:"#fff",
                        marginBottom:10,
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        alignItems:"center"
                    }}>
                        <Icon style={{fontSize:25,color:"#f23030"}} name="lock"/>
                        <TextInput 
                            onChangeText={this.againPwd}
                            placeholder="确认密码"
                            secureTextEntry={true}
                            style={{
                                height:40,
                                width:"87%",
                                backgroundColor:"#fff",
                        }}/>
                    </View>
                    <TouchableOpacity style={{width:"70%",
                        height:40,
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:"#f23030",
                        borderRadius:20}} onPress={this.sginin}>
                        <Text style={{color:"#fff",fontSize:17}}>注册账号</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    logining:{
        color:"#f23030",
        fontSize:30,
        marginTop:20
    }
})