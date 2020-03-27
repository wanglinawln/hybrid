import React, { Component } from 'react'
import { Text, View ,ScrollView,ToastAndroid, StyleSheet,Dimensions} from 'react-native'
import Button from "react-native-button"

const {width}=Dimensions.get("window");
export default class Publish extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1
        }
        this.num=1;
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page=1')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    getData = (flag)=>{
        if(flag==='prev'){
            if(this.num===1){
                ToastAndroid.show("已经是第一页了",100);
                this.setState({
                    page:1
                })
            }
            else{
                this.setState({
                    page:this.state.page-1
                })
                this.num--;
                
            }
        }
        if(flag==="next"){
            this.setState({
                page:this.state.page+1
            })
            this.num++;
        }
        
        let url = 'https://cnodejs.org/api/v1/topics?limit=15'+'&page='+this.num;
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
    }
    render() {
        return (
            <View style={{backgroundColor:"white"}}>
                <ScrollView>
                    {
                        this.state.data.map((item,index)=>(
                            <View key={index} style={styles.content1}>
                                <Text style={styles.txt3}>
                                    {item.title.length>10?item.title.substr(0,10)+"…":item.title}
                                </Text>
                                <View style={styles.content2}>
                                    <Text style={{fontSize:12}}>{item.create_at.substr(0,10)}</Text>
                                    <Text style={item.title.length>15?styles.txt1:styles.txt2}>{item.title.length>15?'待回复':'已回复'}</Text>
                                </View>
                                
                            </View>
                            
                        ))
                    }
                    <View style={styles.content3}>
                        <Button onPress={()=>this.getData("prev")} style={styles.btn}>上一页</Button>
                        <Text style={{fontSize:16}}>{'第'+this.state.page+'页'}</Text>
                        <Button onPress={()=>this.getData("next")} style={styles.btn}>下一页</Button>
                    </View>
                    
                </ScrollView>
            </View>
        )

        
    }
}
const styles=StyleSheet.create({
    txt1:{
        color:'#f23030',
        fontSize:12
    },
    txt2:{
        color:"silver",
        fontSize:12
    },
    content1:{
        width:width,
        height:40,
        flexDirection:"row",
        // justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:width*0.01,
        paddingRight:width*0.005
    },
    content2:{
        width:width*0.4,
        height:40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    content3:{
        width:width,
        height:50,
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    btn:{
        width:100,
        height:35,
        backgroundColor:"#f23030",
        color:"white",
        textAlign:"center",
        textAlignVertical:"center",
        borderRadius:15
    },
    txt3:{
        fontSize:12,
        width:width*0.55
    }
})