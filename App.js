import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image, BackHandler, ToastAndroid,AsyncStorage} from 'react-native';
import {Router, Scene,Tabs, Actions, Overlay, Drawer, Lightbox, Modal} from "react-native-router-flux";
import {Icon} from '@ant-design/react-native'
import Button from "react-native-button"

import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import User from './src/userinfor/Userinfor'

import SplashScreen from 'react-native-splash-screen'
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Publish from './src/userinfor/Publish'
import Signin from './src/common/Signin';



console.disableYellowBox=true;

const App = () => {
    let now=0;
    let [isLogin,setLogin]=useState(false);
    let [isInstall,setInstall]=useState(true);
    let [isSignin,setSignin]=useState(true)
    let init=()=>{
        // AsyncStorage.clear();
        AsyncStorage.getItem('isInstall')
            .then(res=>{
                if(res){
                    setInstall(false)
                }
            })
        AsyncStorage.getItem('user')
            .then(res=>{
                let user =JSON.parse(res)
                if(!user){
                    SplashScreen.hide();
                }
                if(user&&user.token){
                    setLogin(true);
                    setSignin(true);
                    SplashScreen.hide();
                    Actions.homepage()
                }
                console.log(user)
            })
        AsyncStorage.getItem('signin')
            .then(res=>{
                let user =JSON.parse(res)
                
                console.log(user)
            })
    }
    
    useEffect(() => {
        init();
        BackHandler.addEventListener('hardwareBackPress', ()=>{
            if(Actions.currentScene==='home'){
                console.log(Actions.currentScene);
                if(new Date().getTime()-now<2000){
                    BackHandler.exitApp();
                }
                else{
                    ToastAndroid.show("确定退出吗",100);
                    now =new Date().getTime();
                    return true;
                }
                
            }
            else if(Actions.currentScene==='login'){
                console.log(Actions.currentScene);
                if(new Date().getTime()-now<2000){
                    BackHandler.exitApp();
                }
                else{
                    ToastAndroid.show("确定退出吗",100);
                    now =new Date().getTime();
                    return true;
                }
            }
            else{
                console.log(Actions.currentScene);
                Actions.pop();
                return true;
            }
        });
      });
    let afterInstall =()=>{
        console.log("after install")
        setInstall(false)
    }
    if(isInstall){
        return <View style={{flex:1}}>
            <SwiperPage afterInstall={afterInstall}/>
        </View>
    }
    
    
    return (
        <Router>
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
                                    key='tabbar'
                                    activeTintColor="#f23030"
                                    inactiveTintColor="#b7b6b3"
                                    hideNavBar
                                    
                                >
                                    <Scene
                                        key="homepage"
                                        title="首页"
                                        hideNavBar
                                        icon={({focused})=><Icon name="home" color={focused?'#f23030':'#b7b6b3'}/>}
                                    >
                                        <Scene key="home" component={Home}/>
                                    </Scene>
                                    <Scene
                                        key="goodspage"
                                        title="商品分类"
                                        hideNavBar
                                        icon={({focused})=><Icon name="appstore" color={focused?'#f23030':'#b7b6b3'}/>}
                                    >
                                        <Scene key="goods" component={Goods}/>
                                    </Scene>
                                    <Scene
                                        key="cartpage"
                                        title="购物车"
                                        hideNavBar
                                        icon={({focused})=><Icon name="shopping-cart" color={focused?'#f23030':'#b7b6b3'}/>}
                                    >
                                        <Scene key="goods" component={Goods}/>

                                    </Scene>
                                    <Scene
                                        key="userpage"
                                        title="个人中心"
                                        
                                        icon={({focused})=><Icon name="user" color={focused?'#f23030':'#b7b6b3'}/>}
                                    >
                                        <Scene key="user" component={User} hideNavBar/>
                                        <Scene
                                            key='publish'
                                            title="我的发布"
                                            hideTabBar  
                                            hideDrawerButton                     
                                            titleStyle={{flex:1,textAlign:"center",color:"white",backgroundColor:"#f23030"}}
                                            renderRightButton={
                                                <Button>
                                                    <Icon name="dash" color="white" size="lg" style={{marginRight:30}}/>
                                                </Button>
                                            }
                                            navBarButtonColor="white"
                                            navigationBarStyle={{backgroundColor:"#f23030"}}
                                            component={Publish}
                                        >
                                            
                                        </Scene>
                                    </Scene>
                                </Tabs>
                                
                            </Scene>
                        </Drawer>
					
				    </Lightbox>
                    <Scene key="login" initial={!isLogin} component={Login}/>
                    <Scene key="signin" initial={!isSignin} component={Signin}/>
			    </Modal>
            </Overlay>
        </Router>
    );
};


const styles=StyleSheet.create({
    
});

export default App;
