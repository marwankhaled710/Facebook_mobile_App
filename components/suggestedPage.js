import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'


export default function suggestedPage(props){
    return(
        <View style={styles.container}>
            {/*********************** Background *********************/}
            <View style={{width:'100%'}}> 
                <Image
                    style={styles.background}
                    source={{uri:props.background}}/>

                <Image
                    style={styles.closeIcon}
                    source={require('../imgs/close5.png')}/>
            </View>

            {/*********************** Info *********************/}
            <View style={styles.profilePic}>
                <Image
                    style={styles.profile}
                    source={{uri:props.profile}}/>

                <View style={styles.info}>
                    <Text style={{fontWeight:'bold'}}>{props.name}</Text>
                    <Text>{props.field}</Text>
                </View>
            </View>

            {/*********************** Like *********************/}
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:10}}>{props.likes}</Text>
                <Text style={{marginLeft:7}}>people like this</Text>
            </View>
            <TouchableOpacity style={styles.likeButton}>

                <Image style={{width:20,height:20}}
                    source={require('../imgs/like.png')}/>

                <Text style={{color:'white',fontSize:18,marginLeft:10}}>Like</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:300,
        height:305,
        borderWidth:1,
        borderColor:'grey',
        marginRight:5,
        marginLeft:20,
        borderRadius:15,
    },
    background:{
        width:'100%',
        height:150,
        borderTopRightRadius:13,
        borderTopLeftRadius:13,
       // backgroundColor:'red'
    },
    closeIcon:{
        width:25,
        height:25,
        position:'absolute',
        right:15,
        top:10,
        borderRadius:12.5
    },
    profilePic:{
        width:'100%',
        height:70,
        flexDirection:'row',
        //backgroundColor:'red',
        alignItems:'center',
        paddingHorizontal:10
    },
    profile:{
        width:50,
        height:50,
        borderRadius:25
    },
    info:{
        width:220,
        height:70,
        flexDirection:'column',
        justifyContent:'center',
        marginHorizontal:10
    },
    likeButton:{
        width:270,
        height:40,
        backgroundColor:'blue',
        margin:10,
        alignSelf:'center',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }
})