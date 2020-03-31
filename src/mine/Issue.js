import React, { Component } from 'react';
import {View,Text,StyleSheet,Dimensions,TouchableOpacity, Button,ToastAndroid,ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native'

const {width}=Dimensions.get("window");
let page=1;

export default class Issue extends Component{
    constructor(){
        super();
        this.state={
            data:[],
        }
    }   

    componentDidMount=()=>{
        fetch("https://cnodejs.org/api/v1/topics?limit=12&page="+page)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }

    // 翻页
    up=()=>{
        if(page==1){
            ToastAndroid.show("没有上一页了",ToastAndroid.SHORT);
        }else{
            page=page-1;
            // console.log(page);
            fetch("https://cnodejs.org/api/v1/topics?limit=12&page="+page)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    down=()=>{
        page=page+1;
        // console.log(page);
        fetch("https://cnodejs.org/api/v1/topics?limit=12&page="+page)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }

    render(){
        return(
            <View>
                {/* 标题栏 */}
                <View style={{
                        height:40,
                        flexDirection:"row",
                        backgroundColor:"#f23030",
                        justifyContent:"space-evenly",
                    }}> 
                        <TouchableOpacity
                            style={{
                                width:"30%",
                                height:34,
                                justifyContent:"center",
                                paddingLeft:"2%",
                            }}
                            onPress={()=>Actions.mine()}
                        >
                            <Icon style={{fontSize:25}} color={"#ffffff"} name="left"/>
                        </TouchableOpacity>
                        <View style={{
                                width:"30%",
                                height:34,
                                justifyContent:"center",
                                alignItems:"center",
                        }}>
                            <Text style={{color:"#fff",fontSize:20}}>我的发布</Text>
                        </View>
                        <View style={{
                                width:"30%",
                                height:34,
                                justifyContent:"center",
                                paddingLeft:"20%",
                        }}>
                            <Icon style={{fontSize:25}} color={"#ffffff"} name="ellipsis"/>
                        </View>
                </View>

                {/* 内容 */}
                <ScrollView>
                <View style={{backgroundColor:"#fff"}}>
                    {
                        this.state.data.map((item,idx)=>
                        <View style={{
                            height:50,
                            flexDirection:"row",
                            alignItems:"center",
                            paddingLeft:"3%",
                            paddingRight:"3%",
                        }}>
                            <View>
                                {item.title.length>15?<Text>{item.title.slice(0,15)}...</Text>:<Text>{item.title}</Text>}
                            </View>
                            <Text style={{position:"absolute",right:"15%"}}>{item.create_at.slice(0,10)}</Text>
                            <View style={{position:"absolute",right:"3%"}}>
                                {(Math.floor(Math.random()*(50-0+1)+0))%2==0?<Text>已回复</Text>:<Text style={{color:"#f23030"}}>待回复</Text>}
                            </View>
                        </View>
                        )
                    }
                    {/* 换页 */}
                    <View style={{
                        height:50,
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-evenly",
                        marginTop:10
                    }}>
                        <TouchableOpacity style={styles.btn} onPress={()=>this.up()}>
                            <Text style={{color:"#fff"}}>上一页</Text>
                        </TouchableOpacity>
                        <Text>第{page}页</Text>
                        <TouchableOpacity style={styles.btn} onPress={()=>this.down()}>
                            <Text style={{color:"#fff"}}>下一页</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:"100%",height:70}}></View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    btn:{
        width:"20%",
        height:30,
        color:"#fff",
        backgroundColor:"#f23030",
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    }
})