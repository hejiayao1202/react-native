import React ,{useState,useEffect}from 'react';
import {StyleSheet,View,Text, Image, StatusBar,AsyncStorage,BackHandler,ToastAndroid} from 'react-native';
import {Router,Scene, Tabs,Drawer,Lightbox,Modal, Overlay, Actions} from 'react-native-router-flux';
import {Icon,Grid} from '@ant-design/react-native';
import Ticon from 'react-native-vector-icons/FontAwesome';
import Home from './src/home/Home';
import Mine from './src/mine/Mine';
import Classify from './src/classify/Classify';
import Issue from './src/mine/Issue';
import SplashScreen from 'react-native-splash-screen'
import Login from './src/common/Login';
import SignIn from './src/common/SignIn';
import SwiperPage from './src/common/SwiperPage'

console.disableYellowBox=true;
var now=new Date().getTime();

// 完整版

const App = () => {
    let [isLogin,setLogin]=useState(false);
    let [isInstall,setInstall]=useState(true);

    let init=()=>{
        // AsyncStorage.removeItem("user");
        // AsyncStorage.removeItem("isInstall");      
        //判断引导页
        AsyncStorage.getItem("isInstall")
            .then((res)=>{
                // console.log(res);
                if(res){
                    setInstall(false);
                }
            })

        // 打开App，判断是否已登录
        AsyncStorage.getItem("user")
            .then(res=>{
                let user=JSON.parse(res);
                if(!user){
                    SplashScreen.hide();
                }
                if(user&&user.token){
                    setLogin(true);
                    // 隐藏引导页
                    SplashScreen.hide();
                }
                console.log(res);
            })
    }
    useEffect(()=>{ 
       init();
    },[])

    // 子组件改父组件状态，把父组件传过去
    let afterInstall=()=>{
        setInstall(false)
    }

// console.log(isInstall)
    if(isInstall){
        return<View style={{flex:1}}>
            <SwiperPage afterInstall={afterInstall}/>
        </View>
    }
    
    return (
        <Router
            backAndroidHandler={()=>{
                console.log(Actions.currentScene);
                if(Actions.currentScene!="home"&&Actions.currentScene!="login"){
                    Actions.pop();
                    return true;
                }else{
                    if(new Date().getTime()-now<2000){
                        BackHandler.exitApp();
                    }else{
                        ToastAndroid.show("确认要退出么，请再按一次退出",100);
                        now=new Date().getTime();
                        return true;
                    }
                }
            }}
        >
            {/* 页面跳转都要放到Router里 */}
            <Overlay>
            <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox">
                <Drawer
                    key="drawer"
                    contentComponent={()=><Text>drawer</Text>}
                    drawerIcon={()=><Icon name="menu"/>}
                    drawerWidth={400}
                >
                <Scene key="root">
                    <Tabs 
                        key="tabbar" 
                        hideNavBar 
                        activeTintColor="#f23030"//选中
                        inactiveTintColor="#a0a0a0"//不选中
                        tabBarStyle={{borderTopColor:"white"}}
                    >
                        {/*首页*/}
                        <Scene 
                            key="hm"
                            title="首页"
                            hideNavBar
                            icon={
                                ({focused})=><Icon color={focused?"#f23030":"#a0a0a0"} size={25} name="home" />
                        }>
                            <Scene key="home" component={Home} />
                        </Scene>

                        {/* 商品分类 */}
                        <Scene 
                            key="cla"
                            title="商品分类"
                            hideNavBar
                            icon={
                                ({focused})=><Ticon name="th-large" size={23} color={focused?"#f23030":"#a0a0a0"} />
                        }>
                            <Scene key="classify" component={Classify} />
                        </Scene>

                        {/* 个人中心 */}
                        <Scene 
                            key="my" 
                            title="个人中心"
                            hideNavBar
                            icon={
                                ({focused})=><Icon color={focused?"#f23030":"#a0a0a0"} size={25} name="user" />
                        }>
                            <Scene key="mine" component={Mine} />
                            <Scene key="issue" component={Issue} />
                        </Scene>
                    </Tabs>
                </Scene>
                </Drawer>
            </Lightbox>

            {/* 登录页 要在Lightbox外边 */}
            {/* 写上属性initial={true} 先显示登录 再显示tabs里的 */}
            {/* 如果本地存储是已登录则直接显示首页 */}
            <Scene initial={!isLogin} key="login" component={Login}/>
            <Scene key="signin" component={SignIn}/>

            </Modal>
            </Overlay>
        </Router>
    );
};

const styles = StyleSheet.create({
    
});

export default App;