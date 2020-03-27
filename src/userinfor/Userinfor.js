import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,AsyncStorage} from 'react-native';
import Button from "react-native-button"
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux'

const {width}=Dimensions.get("window");

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class Userinfor extends Component {
    constructor(){
        super();
        this.state={
            imgUrl:''
        }
            
    }
    componentDidMount(){
        AsyncStorage.getItem('photo')
        .then((res)=>{
            const source={uri:res};
            console.log(res);
            console.log(source);
            this.setState({
                imgUrl:res?source:require("../images/user1.png")
            })
            
        })
    }
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
                imgUrl: source,
              });
              console.log(response.path);
              console.log(response.fileName);

              AsyncStorage.setItem('photo',response.uri,
                console.log('success')
              );
              
            }
        });
        
    }
    exit=()=>{
        AsyncStorage.clear();
        Actions.login();
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <View style={styles.head}>
                        <View style={styles.img1}>
                            <Button onPress={()=>{this.takephoto()}}>
                                <Image source={this.state.imgUrl} style={styles.img2}/>
                            </Button>
                        </View>
                        
                        <Text style={styles.txt}>BINNU DHILLON</Text>
                    </View>
                    <Image source={require("../images/user2.png")} style={styles.img3}/>
                    <View style={styles.content1}>
                        <Image source={require("../images/user3.png")} style={styles.img4}/>
                        <Text style={styles.txt1}>我的个人中心</Text>
                    </View>
                    <View style={styles.content2}>
                        <View style={styles.content3}>
                            <Image source={require("../images/user4.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>账户管理</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user5.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>收货地址</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user6.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>我的信息</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user7.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>我的订单</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user8.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>我的二维码</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user9.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>我的积分</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user10.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>我的收藏</Text>
                        </View>
                    </View>
                    <View style={styles.content1}>
                        <Image source={require("../images/user11.png")} style={styles.img4}/>
                        <Text style={styles.txt1}>E族活动</Text>
                    </View>
                    <View style={styles.content4}>
                        <View style={styles.content3}>
                            <Image source={require("../images/user12.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>居家维修保养</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user13.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>出行接送</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user14.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>我的受赠人</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user15.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>我的住宿优惠</Text>
                        </View>
                        <View style={styles.content3}>
                            <Image source={require("../images/user16.png")} style={styles.img5}/>
                            <Text style={styles.txt2}>我的活动</Text>
                        </View>
                        <Button onPress={()=>Actions.publish()}>
                            <View style={styles.content3}>
                                <Image source={require("../images/user17.png")} style={styles.img5}/>
                                <Text style={styles.txt2}>我的发布</Text>
                            </View>
                        </Button>
                    </View>
                    <Button onPress={this.exit} style={styles.btn1}>退出登录</Button>
                </View>
                
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    head:{
        width:width,
        height:230,
        backgroundColor:"#f23030",
        alignItems:"center",
    },
    img1:{
        width:80,
        height:80,
        borderRadius:40,
        borderColor:"white",
        borderWidth:1,
        overflow:"hidden",
        marginTop:40
    },
    img2:{
        width:80,
        height:80,
        resizeMode:"cover"
    },
    txt:{
        marginTop:25,
        color:"white",
        fontSize:18
    },
    img3:{
        width:width,
        height:65,
        marginTop:-80,
        resizeMode:"cover"
    },
    content1:{
        width:width,
        height:40,
        backgroundColor:"white",
        paddingLeft:15,
        borderBottomWidth:1,
        borderBottomColor:"#e8e8e8",
        flexDirection:"row",
        alignItems:"center"
    },
    img4:{
        width:width*0.06,
        height:width*0.06,
        resizeMode:"contain"
    },
    txt1:{
        color:"#4f4e4e",
        marginLeft:15
    },
    content2:{
        width:width,
        height:240,
        backgroundColor:"white",
        flexDirection:"row",
        flexWrap:"wrap",
        paddingLeft:width*0.02,
        marginBottom:10
    },
    content3:{
        width:width*0.31,
        height:75,
        // flexDirection:"column-reverse",
        alignItems:"center",
        justifyContent:"center",
        // flexWrap:'wrap'
    },
    img5:{
        width:width*0.06,
        height:width*0.06,
        resizeMode:"contain",
        marginTop:10,
        marginBottom:10
    },
    txt2:{
        color:"#4f4e4e",
    },
    content4:{
        width:width,
        height:160,
        backgroundColor:"white",
        flexDirection:"row",
        flexWrap:"wrap",
        paddingLeft:15
    },
    btn1:{
        color:"#fff",
        backgroundColor:"#f23030",
        marginTop:20,
        marginBottom:20,
        width:120,
        height:35,
        textAlign:"center",
        textAlignVertical:"center",
        borderRadius:10,
        
    }
})
