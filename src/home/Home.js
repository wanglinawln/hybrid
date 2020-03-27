import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,TextInput,Dimensions,ScrollView,StatusBar} from 'react-native';
import {Icon} from '@ant-design/react-native'
import Swiper from 'react-native-swiper';
import Button from "react-native-button"


const {width}=Dimensions.get("window");
export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <StatusBar backgroundColor="#f23030"/>
                    
                    <View style={styles.head}>
                        <View style={styles.head1}>
                            <Icon name="search" color="white" style={styles.i1}/>
                            <TextInput 
                                placeholder="请输入您要搜索的关键字" 
                                placeholderTextColor="white" 
                                style={{paddingTop:0,paddingBottom:0}}
                            />
                        </View>
                        <Icon name="shopping-cart" color="white"/>
                    </View>
                    <Swiper
                        style={styles.head2}
                        autoplay={true}
                        dotStyle={styles.dot}
                        activeDotStyle={styles.dota}
                    >   
                        <Image source={require("../images/server2.png")} style={styles.img1}/>
                        <Image source={require("../images/server1.png")} style={styles.img1}/>            
                        <Image source={require("../images/server2.png")} style={styles.img1}/>
                    </Swiper>
                    <View style={styles.list}>
                        <Image source={require("../images/server3.png")} style={styles.img2}/>
                        <Text style={styles.txt}>居家维修保养</Text>
                        <Icon name="right"/>
                    </View>
                    <View style={styles.list}>
                        <Image source={require("../images/server4.png")} style={styles.img2}/>
                        <Text style={styles.txt}>住宿优惠</Text>
                        <Icon name="right"/>
                    </View>
                    <View style={styles.list}>
                        <Image source={require("../images/server5.png")} style={styles.img2}/>
                        <Text style={styles.txt}>出行接送</Text>
                        <Icon name="right"/>
                    </View>
                    <View style={styles.list}>
                        <Image source={require("../images/server6.png")} style={styles.img2}/>
                        <Text style={styles.txt}>E族活动</Text>
                        <Icon name="right"/>
                    </View>
                    <Button  style={styles.btn}>
                        发布需求
                    </Button>
                    <Text style={styles.txt1}>©E族之家 版权所有</Text>
                </View>
                
            </ScrollView>
            
        )
    }
}

const styles=StyleSheet.create({
    head:{
        width:width,
        height:50,
        backgroundColor:"#f23030",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    head1:{
        width:"80%",
        height:35,
        backgroundColor:"#fbb8b8",
        borderColor:"#fbb8b8",
        borderWidth:1,
        borderRadius:15,
        alignItems:"center",
        flexDirection:"row"
    },
    head2:{
        height:220,
    },
    img1:{
        width:width,
        height:220,
        resizeMode:'cover',
        flex:1
    },
    dota:{
        backgroundColor:"#f23030"
    },
    dot:{
        backgroundColor:"white"
    },
    list:{
        width:width,
        height:80,
        backgroundColor:"white",
        flexDirection:"row",
        marginTop:10,
        justifyContent:"space-between",
        alignItems:"center",
        padding:20
    },
    img2:{
        width:65,
        height:65
    },
    txt:{
        color:"#6e6e6e",
        marginLeft:10,
        // marginRight:width*0.08,
        fontSize:16,
        width:width*0.6
    },
    btn:{
        width:width*0.8,
        height:50,
        backgroundColor:"#f23030",
        borderRadius:8,
        marginTop:20,
        color:"white",
        textAlignVertical:"center",
    },
    txt1:{
        color:"#767676",
        marginTop:40,
        fontSize:14
    },
    i1:{
        marginLeft:20
    }
})
