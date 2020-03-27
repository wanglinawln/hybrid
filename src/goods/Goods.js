import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView} from 'react-native';

export default class Goods extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.head}>
                    <View style={styles.head1}>
                        <TextInput 
                            placeholder="请输入商品名称"
                            placeholderTextColor="#999999"
                            style={{paddingTop:0,paddingBottom:0}}
                        />
                        <TouchableOpacity>
                            <Image source={require('../images/search.png')} style={{width:15,height:15,marginRight:10}}/>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={styles.head2}>
                    <Text style={styles.txt1}>综合</Text>
                    <Text style={styles.txt2}>销量</Text>
                    <Text style={styles.txt2}>新品</Text>
                    <Text style={styles.txt2}>价格</Text>
                    <Text style={styles.txt2}>信用</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.box}>
                        <View style={styles.img}>
                            <Image source={require('../images/img1.png')} style={{width:115,height:130}}/>
                        </View>
                        
                        <Text style={{color:"#666666"}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:"#f23030"}}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.img}>
                            <Image source={require('../images/img2.png')} style={{width:115,height:130}}/>
                        </View>
                        
                        <Text style={{color:"#666666"}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:"#f23030"}}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.img}>
                            <Image source={require('../images/img1.png')} style={{width:115,height:130}}/>
                        </View>
                        
                        <Text style={{color:"#666666"}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:"#f23030"}}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.img}>
                            <Image source={require('../images/img2.png')} style={{width:115,height:130}}/>
                        </View>
                        
                        <Text style={{color:"#666666"}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:"#f23030"}}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.img}>
                            <Image source={require('../images/img1.png')} style={{width:115,height:130}}/>
                        </View>
                        
                        <Text style={{color:"#666666"}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:"#f23030"}}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.img}>
                            <Image source={require('../images/img2.png')} style={{width:115,height:130}}/>
                        </View>
                        
                        <Text style={{color:"#666666"}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:"#f23030"}}>36.00</Text>
                    </View>
                    
                </View>
            
            </ScrollView>
    
        )
    }
}

const styles=StyleSheet.create({
    head:{
        width:'100%',
        height:60,
        borderBottomWidth:2,
        borderBottomColor:"#e8e8e8",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    head1:{
        width:'80%',
        borderColor:"#eeeeee",
        height:36,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:"#eeeeee",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
    },
    head2:{
        width:'100%',
        height:70,
        flexDirection:'row',
        borderBottomWidth:2,
        borderBottomColor:"#e8e8e8",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"white"

    },
    content:{
        width:"100%",
        backgroundColor:"#f4f4f4",
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap'
    },
    box:{
        width:'43%',
        // height:280,
        backgroundColor:'white',
        margin:10,
        padding:10
    },
    img:{
        width:'100%',
        height:170,
        justifyContent:"center",
        alignItems:"center"
    },
    
    txt1:{
        fontSize:16,
        color:"#f23030"
    },
    txt2:{
        color:"#333333",
        fontSize:16
    },
});
