import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,//相当于div
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {Icon,Grid} from '@ant-design/react-native'


const Classify = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
            {/* 搜索框 */}
            <View style={{
                flexDirection:"row",
                justifyContent:"center",
                backgroundColor:"white"
            }}> 
                <View style={{
                    height:40,
                    width:"85%",
                    borderRadius:2,
                    borderColor:"#eeeeee",
                    backgroundColor:"#eeeeee",
                    borderWidth:1,
                    flexDirection:"row",
                    justifyContent:"space-evenly",
                    marginTop:10,
                }}>
                    <TextInput style={{
                        width:"85%",
                        height:30,
                        margin:5,
                        fontSize:15,
                        padding:0,
                        color:"gray",
                    }} defaultValue={"请输入商品名称"} />

                    <TouchableOpacity
                        style={{
                            width:"10%",
                            height:40,
                            justifyContent:"center",
                            alignItems:"center",
                        }}
                    >
                        <Icon name="search"/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 分类 */}
            <View style={{
                flexDirection:"row",
                justifyContent:"space-evenly",
                backgroundColor:"white",
                height:50,
                alignItems:"center",
                borderBottomColor:"#b8b8b8",
                borderBottomWidth:1
            }}>
              <Text style={{color:"red"}}>综合</Text>
              <Text>销量</Text>
              <Text>新品</Text>
              <Text>价格</Text>
              <Text>信用</Text>
            </View>

            {/* 详情 */}
            <View style={{
                flexDirection:"row",
                justifyContent:"space-evenly",
                height:280,
                marginTop:10
            }}>
              <View style={styles.oishi}>
                  <View style={styles.img}>
                    <Image source={require("../../img/work/img1.jpg")}/>
                  </View>
                  <View style={styles.title}>
                    <Text>
                      Oishi/上好佳玉米密卷20包膨化休闲食品Oishi/上好佳
                    </Text>
                  </View>
                  <View style={styles.money}>
                    <Text style={{color:"red"}}>36.00</Text>
                  </View>
              </View>
              <View style={styles.oishi}>
                  <View style={styles.img}>
                    <Image source={require("../../img/work/img2.jpg")}/>
                  </View>
                  <View style={styles.title}>
                    <Text>
                      Oishi/上好佳玉米密卷20包膨化休闲食品Oishi/上好佳
                    </Text>
                  </View>
                  <View style={styles.money}>
                    <Text style={{color:"red"}}>36.00</Text>
                  </View>
              </View>
            </View>

            <View style={{
                flexDirection:"row",
                justifyContent:"space-evenly",
                height:280,
                marginTop:10
            }}>
              <View style={styles.oishi}>
                  <View style={styles.img}>
                    <Image source={require("../../img/work/img1.jpg")}/>
                  </View>
                  <View style={styles.title}>
                    <Text>
                      Oishi/上好佳玉米密卷20包膨化休闲食品Oishi/上好佳
                    </Text>
                  </View>
                  <View style={styles.money}>
                    <Text style={{color:"red"}}>36.00</Text>
                  </View>
              </View>
              <View style={styles.oishi}>
                  <View style={styles.img}>
                    <Image source={require("../../img/work/img2.jpg")}/>
                  </View>
                  <View style={styles.title}>
                    <Text>
                      Oishi/上好佳玉米密卷20包膨化休闲食品Oishi/上好佳
                    </Text>
                  </View>
                  <View style={styles.money}>
                    <Text style={{color:"red"}}>36.00</Text>
                  </View>
              </View>
            </View>

            <View style={{
                flexDirection:"row",
                justifyContent:"space-evenly",
                height:280,
                marginTop:10
            }}>
              <View style={styles.oishi}>
                  <View style={styles.img}>
                    <Image source={require("../../img/work/img1.jpg")}/>
                  </View>
                  <View style={styles.title}>
                    <Text>
                      Oishi/上好佳玉米密卷20包膨化休闲食品Oishi/上好佳
                    </Text>
                  </View>
                  <View style={styles.money}>
                    <Text style={{color:"red"}}>36.00</Text>
                  </View>
              </View>
              <View style={styles.oishi}>
                  <View style={styles.img}>
                    <Image source={require("../../img/work/img2.jpg")}/>
                  </View>
                  <View style={styles.title}>
                    <Text>
                      Oishi/上好佳玉米密卷20包膨化休闲食品Oishi/上好佳
                    </Text>
                  </View>
                  <View style={styles.money}>
                    <Text style={{color:"red"}}>36.00</Text>
                  </View>
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    oishi:{
      width:"45%",
      height:280,
      backgroundColor:"white",
      alignItems:"center"
    },
    img:{
      width:"90%",
      height:190,
      justifyContent:"center",
      alignItems:"center"
    },
    title:{
      width:"90%",
      height:50,
    },
    money:{
      width:"90%",
      height:40,
    }
});

export default Classify;