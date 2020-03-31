import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import {Icon} from '@ant-design/react-native'
import Ticon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

const {width}=Dimensions.get("window");

export default class Home extends Component{
    render(){
        return(
            <View>
                <StatusBar backgroundColor="#f23030" barStyle="light-content" />
                <ScrollView>
                    {/* 搜索框 */}
                    <View style={{
                        height:50,
                        flexDirection:"row",
                        backgroundColor:"#f23030",
                        justifyContent:"space-evenly",
                    }}> 
                        <View style={{
                            height:34,
                            width:"85%",
                            borderRadius:17,
                            backgroundColor:"#fbb8b8",
                            flexDirection:"row",
                            justifyContent:"space-evenly",
                            marginTop:10,
                        }}>
                            <Icon style={{color:"white",marginTop:7}} name="search"/>
                            <TextInput style={{
                                width:"85%",
                                height:34,
                                fontSize:15,
                                padding:0,
                                color:"white",
                            }} placeholder={"请输入您要搜索的关键字"} placeholderTextColor="white" />
                        </View>
                        <TouchableOpacity
                            style={{
                                width:"10%",
                                height:34,
                                justifyContent:"center",
                                alignItems:"center",
                                marginTop:10
                            }}
                        >
                            <Icon style={{fontSize:26}} color={"#ffffff"} name="shopping-cart"/>
                        </TouchableOpacity>
                    </View>

                    {/* 轮播图 */}
                    <View>
                        <Swiper style={{height:200}}
                            dot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 10, marginRight: 10, marginTop: 3}} />}
                            activeDot={<View style={{ backgroundColor: '#f23030', width: 8, height: 8, borderRadius: 4, marginLeft: 10, marginRight: 10, marginTop: 3}} />}
                            autoplay={true}
                        >
                            <View style={styles.slide}>
                                <Image style={styles.img} source={require("../../img/work/swiper1.jpg")}/>
                            </View>
                            <View style={styles.slide}>
                                <Image style={styles.img} source={require("../../img/work/swiper1.jpg")}/>
                            </View>
                            <View style={styles.slide}>
                                <Image style={styles.img} source={require("../../img/work/swiper2.jpg")}/>
                            </View>
                        </Swiper>
                    </View>

                    {/* 列表 */}
                    <View style={styles.list}>
                        <View style={[styles.circle,{backgroundColor:"#ffcccc"}]}>
                            <Ticon name="cogs" size={32} color="#727272" />
                        </View>
                        <View style={styles.title}>
                            <Text style={{fontSize:17}}>居家维修保养</Text>
                        </View> 
                        <View style={[styles.title,{marginLeft:"47%"}]}>
                            <Ticon name="chevron-right" size={17} color="#e0e0e0" />
                        </View>   
                    </View> 
                    <View style={styles.list}>
                        <View style={[styles.circle,{backgroundColor:"#ffe1b1"}]}>
                            <Ticon name="flag" size={32} color="#e24f32" />
                        </View>
                        <View style={styles.title}>
                            <Text style={{fontSize:17}}>住宿优惠</Text>
                        </View> 
                        <View style={[styles.title,{marginLeft:"54%"}]}>
                            <Ticon name="chevron-right" size={17} color="#e0e0e0" />
                        </View>   
                    </View> 
                    <View style={styles.list}>
                        <View style={[styles.circle,{backgroundColor:"#bfe6a8"}]}>
                            <Ticon name="clock-o" size={32} color="#f2e5ca" />
                        </View>
                        <View style={styles.title}>
                            <Text style={{fontSize:17}}>出行接送</Text>
                        </View> 
                        <View style={[styles.title,{marginLeft:"54%"}]}>
                            <Ticon name="chevron-right" size={17} color="#e0e0e0" />
                        </View>   
                    </View> 
                    <View style={styles.list}>
                        <View style={[styles.circle,{backgroundColor:"#c3ddf2"}]}>
                            <Ticon name="gift" size={32} color="#1997dd" />
                        </View>
                        <View style={styles.title}>
                            <Text style={{fontSize:17,color:"#ffe1b1"}}>E族活动</Text>
                        </View> 
                        <View style={[styles.title,{marginLeft:"55%"}]}>
                            <Ticon name="chevron-right" size={17} color="#e0e0e0" />
                        </View>   
                    </View> 

                    {/* 按钮 */}
                    <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{color:"#fff",fontSize:17}}>发布需求</Text>
                        </TouchableOpacity>
                    </View>

                    {/* 文字 */}
                    <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}}>
                        <Text style={{fontSize:12,color:"#818181"}}>©E族之家 版权所有</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    slide:{
        width:width,
        height:200,
        justifyContent:"center",
        alignItems:"center",
    },
    img:{
        width:width,
        height:250,
    },
    list:{
        width:width,
        height:80,
        marginTop:7,
        flexDirection:"row",
        backgroundColor:"#fff"
    },
    circle:{
        width:66,
        height:66,
        borderRadius:33,
        marginTop:7,
        marginLeft:15,
        marginRight:30,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        justifyContent:"center",
    },
    btn:{
        width:"85%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f23030",
        borderRadius:7
    }
})