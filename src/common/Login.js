import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,AsyncStorage,ActivityIndicator,Dimensions,BackHandler,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Grid,Icon} from '@ant-design/react-native'
import {myFetch} from "../utils/index"
const {width,height}=Dimensions.get("window");
let now=0;
BackHandler.addEventListener('back',()=>{
    console.log(new Date().getTime());
    if(new Date().getTime()-now<2000){
        BackHandler.exitApp();
    }
    else{
        ToastAndroid.show("确定退出吗",100);
        now =new Date().getTime();
        return true;
    }
})

export default class Login extends Component {
    
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isLoading:false
        }
    }
    
    userhandel=(text)=>{
        console.log(text)
        this.setState({
            username:text
        })
    }
    pwdhandel=(text)=>{
        console.log(text)
        this.setState({
            pwd:text
        })
    }
    login=()=>{
        this.setState({isloading:true})

        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
        }).then(res=>
            //根据返回状态进行判断，正确时跳到首页
            AsyncStorage.setItem("user",JSON.stringify(res.data))
            .then(()=>{
                this.setState({isLoading:false})
                Actions.homepage()
            })            
                
        )
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <View style={{
                    justifyContent:'center',
                    flexWrap:'wrap',
                    alignItems:"center"
                }}>
                    <View style={[{flexDirection:'row'},styles.input]}>
                        <Icon name="user" color="red"/>
                        <TextInput 
                            placeholder="用户名"
                            onChangeText={this.userhandel}
                            style={{paddingBottom:0,paddingTop:0}}
                        />
                    </View>
                    <View style={[{flexDirection:'row'},styles.input]}>
                        <Icon name="eye" color="red"/>
                        <TextInput 
                            placeholder="密码"
                            onChangeText={this.pwdhandel}
                            secureTextEntry={true}
                            style={{paddingBottom:0,paddingTop:0}}

                        />
                    </View>
                    
                </View>
                <TouchableOpacity onPress={this.login} style={styles.btn}>
                    <Text style={{color:"#fff"}}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.signin()} style={styles.btn}>
                    <Text style={{color:"#fff"}}>前往注册</Text>
                </TouchableOpacity>
                {
                    this.state.isloading
                    ?<View style={styles.innerBox}>
                        <ActivityIndicator size="large" color="red"/>
                    </View>
                    
                    :null
                }
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    box:{
        width:'40%',
        height:100,
        backgroundColor:'blue',
        margin:5
    },
    btn:{
        borderColor:"#f23030",
        width:250,
        height:34,
        borderWidth:1,
        backgroundColor:"#f23030",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        borderRadius:25
    },
    input:{
        borderColor:"silver",
        width:320,
        height:34,
        borderBottomWidth:1,
        alignItems:"center",
        margin:10
    },
    innerBox:{
        width:width,
        height:height,
        backgroundColor:'silver',
        justifyContent:"center",
        alignItems:"center",
        opacity:0.5,
        position:"absolute",
    }
});
