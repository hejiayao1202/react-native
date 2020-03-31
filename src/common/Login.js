import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
    ProgressBarAndroid
} from 'react-native';
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
            isloading:false
        }
    }

    login=()=>{
        if(this.state.username==""||this.state.pwd==""){
            ToastAndroid.show("用户名和密码不能为空",ToastAndroid.SHORT);
        }else{
            this.setState({
                isloading:true
            })
            myFetch.post('/login',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                // console.log(res);
                // 根据返回状态进行判断，正确时返回首页
                // 存取是异步的,把登录状态存起来
                if(res.data.judge==1){
                    this.setState({isloading:false})
                    ToastAndroid.show("用户名还未注册",ToastAndroid.SHORT);
                }else if(res.data.judge==2){
                    this.setState({isloading:false})
                    ToastAndroid.show("登录失败",ToastAndroid.SHORT);
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({isloading:false})
                        Actions.lightbox();  
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

    render(){
        return(
            <View style={{justifyContent:"center",alignItems:"center",height:"100%"}}>
                {/* app刚进来的登录页 */}
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
                <TouchableOpacity style={{width:"70%",
                    height:40,
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:"#f23030",
                    borderRadius:20}} onPress={this.login}>
                    <Text style={{color:"#fff",fontSize:17}}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"70%",
                    height:40,
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:"#f23030",
                    borderRadius:20,
                    marginTop:10}} onPress={()=>Actions.signin()}>
                    <Text style={{color:"#fff",fontSize:17}}>注册</Text>
                </TouchableOpacity>
            {
                this.state.isloading?<View style={styles.loading}>
                    <ProgressBarAndroid styleAttr='Inverse' color='#fff' />
                    <Text style={{color:"#fff",fontSize:20}}>正在登录</Text>
                </View>:null
            }
            </View>
        )
    }
}

const styles=StyleSheet.create({
    loading: { 
        // flex:1,
        width:"100%",
        height:"100%",
        position:"absolute",
        top:0,
        left:0,
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    }
})