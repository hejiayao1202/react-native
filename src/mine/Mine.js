import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
    Button,
    AsyncStorage,
    ScrollView,
    SafeAreaView
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';


const {width}=Dimensions.get("window");

const options = {
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class Mine extends Component{
    constructor(){
        super();
        let data1=[
            {tit:"账户管理",key:"setting"},
            {tit:"收货地址",key:"environment"},
            {tit:"我的信息",key:"solution"},
            {tit:"我的订单",key:"calendar"},
            {tit:"我的二维码",key:"qrcode"},
            {tit:"我的积分",key:"euro"},
            {tit:"我的收藏",key:"star"}
        ];
        let data2=[
            {tit:"居家维修保养",key:"tool"},
            {tit:"出行接送",key:"car"},
            {tit:"我的受赠人",key:"user"},
            {tit:"我的住宿优惠",key:"gift"},
            {tit:"我的活动",key:"flag"},
            {tit:"我的发布",key:"form"}
        ];
        this.state={
            data1,
            data2,
            avatarSource:""
        }
        // 判断并保存本地存储中的头新路径
        AsyncStorage.getItem("touxiang").then((res)=>{
            // console.log(res);
            if(res!=null){
                this.setState({
                    avatarSource:JSON.parse(res)
                })
            }
            // console.log(this.state);
        });
    }

    // 照相机事件
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {     
                const source = { uri: response.uri };
                this.setState({
                    avatarSource: source,
                });
                // console.log(source);
                AsyncStorage.setItem("touxiang",JSON.stringify(source));
            }
            // console.log(this.state);
        });
    }

    // 退出登录
    exit=()=>{
        AsyncStorage.removeItem("user")
        .then(()=>{
            Actions.reset("login");
            // console.log(Actions.currentScene);
        })
    }

    render(){
        return(
            <View>
                <ScrollView>
                {/* 头像 */}
                <TouchableOpacity style={{
                    width:width,
                    height:200,
                    backgroundColor:"#f23030",
                    justifyContent:"center",
                    alignItems:"center",
                }} onPress={()=>{this.takephoto()}} >
                    <Image style={{width:80,height:80,borderRadius:40,borderColor:"#fff",borderWidth:1}} source={this.state.avatarSource}/>
                    <Text style={{marginTop:10,color:"#fff",fontSize:17}}>BINNU DHILLON</Text>
                </TouchableOpacity>

                {/* 个人中心 */}
                <View style={{width:width,height:270,backgroundColor:"#fff"}}>
                    {/* 标题 */}
                    <View style={styles.top}>
                        <Icon style={styles.icon} color={"#c3c3c3"} name="user"/>
                        <Text>我的个人中心</Text>
                    </View>
                    {/* 内容 */}
                    <FlatList 
                        numColumns={3}
                        data={this.state.data1}
                        renderItem={({item})=>
                            <View style={styles.box}>
                                <Icon style={{marginBottom:5,fontSize:25}} color={"#c3c3c3"} name={item.key}/>
                                <Text>{item.tit}</Text>
                            </View>
                        }
                    />
                </View>

                {/* E族活动 */}
                <View style={{width:width,height:200,backgroundColor:"#fff",marginTop:5}}>
                    {/* 标题 */}
                    <View style={styles.top}>
                        <Icon style={styles.icon} color={"#c3c3c3"} name="tag"/>
                        <Text>E族活动</Text>
                    </View>
                    {/* 内容 */}
                    <FlatList 
                        numColumns={3}
                        data={this.state.data2}
                        renderItem={({item})=>{
                            if(item.tit=="我的发布"){
                                return(
                                    <TouchableOpacity style={styles.box} onPress={()=>Actions.issue()} >
                                        <Icon style={{marginBottom:5,fontSize:25}} color={"#c3c3c3"} name={item.key}/>
                                        <Text>{item.tit}</Text>
                                    </TouchableOpacity>
                                )
                            }else{
                                return(
                                    <View style={styles.box}>
                                        <Icon style={{marginBottom:5,fontSize:25}} color={"#c3c3c3"} name={item.key}/>
                                        <Text>{item.tit}</Text>
                                    </View>
                                )
                            }
                        } 
                        }
                    />
                </View>

                <View style={{alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity style={{width:"50%",
                        height:40,
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:"#f23030",
                        borderRadius:20,
                        marginTop:10}} onPress={this.exit}>
                        <Text style={{color:"#fff",fontSize:17}}>退出登录</Text>
                    </TouchableOpacity>
                </View>

                {/* 文字 */}
                <View style={{flexDirection:"row",justifyContent:"center",marginTop:15}}>
                    <Text style={{fontSize:12,color:"#818181"}}>BINNU DHILLON | 退出</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    top:{
        width:width,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:"#dbdbdb",
        flexDirection:"row",
        alignItems:"center"
    },
    icon:{
        marginLeft:10,
        marginRight:10,
        fontSize:25
    },
    box:{
       width:"25%",
       height: 50,
       marginTop:17,
       marginLeft:17,
       marginRight:17,
       alignItems:"center",
       justifyContent:"center"
    }
})