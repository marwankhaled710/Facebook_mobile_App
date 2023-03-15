import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'


export default function Post(props){

    return(
        <View style={styles.container}>
            {/*************** Post's header *************/}
            <View style={styles.header}>
                <TouchableWithoutFeedback 
                onPress={(navigation) => {
                    props.navigat(navigation) 
                }}>
                    <Image
                    style={styles.profile}
                    source={{uri:props.ownerPic}}
                    />
                </TouchableWithoutFeedback>

                

                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold'}}>{props.name}</Text>
                    <Text style={{color:'grey',fontWeight:'bold'}}>{props.time}</Text>
                    
                    <Image
                    style={styles.dot}
                    resizeMode='contain'
                    source={require('../imgs/dot.png')}
                    />

                    <Image
                    style={styles.earth}
                    resizeMode='contain'
                    source={require('../imgs/earth3.png')} 
                    />
                </View>

                <Image
                    style={styles.dotsMenu}
                    resizeMode='contain'
                    source={require('../imgs/dotsMenu.png')}
                    />

            </View>

            {/*************** Post's content *************/}
            <View style={styles.content}>
                <Image
                    style={{width:'100%',height:400}}
                    resizeMode='contain'
                    source={{uri:props.postPic}}
                />
            </View>

            {/*************** Post's reactions & comments *************/}
            <View style={styles.reactions}>
                {/*************** Post's reactions *************/}
                <View style={styles.numOfReacts}>
                    <Image
                    style={styles.reacts}
                    resizeMode='contain'
                    source={require('../imgs/like14.png')}
                    />
                    <Text style={{color:'grey',fontWeight:'bold'}}>{props.likes}</Text>
                </View>
                {/*************** Post's comments *************/}
                <View style={styles.numOfComments}>
                    <Text style={styles.commentsText}>{props.comments}</Text>
                    <Text style={styles.commentsNum}>Comment</Text>
                </View>
            </View>

            {/*************** Post's reaction options *************/}
            <View style={styles.reactionOptions}>
                {/*************** react *************/}
                <View style={{flex:1,height:55}}>
                    <TouchableOpacity >
                        <Image
                        style={{width:30,height:30,position:'absolute',top:12,left:20}}
                        resizeMode='contain'
                        source={require('../imgs/like3.png')}
                        />
                        <Text style={[styles.reactionOptionsText,{marginLeft:60}]}>Like</Text>
                    </TouchableOpacity>
                </View>
    
                {/*************** comment *************/}
                <View style={{flex:1,height:55}}>
                <TouchableOpacity>
                    <Image
                        style={{width:25,height:30,position:'absolute',top:15,left:10}}
                        resizeMode='contain'
                        source={require('../imgs/comment2.png')}
                    />
                    <Text style={[styles.reactionOptionsText,{marginLeft:42}]}>Comment</Text>
                </TouchableOpacity>
                </View>
                
                {/*************** send *************/}
                <View style={{flex:1,height:55}} >
                    <TouchableOpacity>
                    <Image
                        style={{width:30,height:30,position:'absolute',top:12,left:20}}
                        resizeMode='contain'
                        source={require('../imgs/send.png')}
                    />
                        <Text style={[styles.reactionOptionsText,{marginLeft:55}]}>Send</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:570,
        backgroundColor:'white',
        marginTop:10,
        marginBottom:5
    },
    header:{
        width:'100%',
        height:60,
        //backgroundColor:'red',
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center'
    },
    profile:{
        width:50,
        height:50,
        borderRadius:25
    },
    earth:{
        width:15,
        height:15,
        position:'absolute',
        left:25,
        top:22,
        marginLeft:3
    },
    dot:{
        width:4,
        height:4,
        position:'absolute',
        left:20,
        top:28,
        marginLeft:2
    },
    dotsMenu:{
        width:30,
        height:30,
        position:'absolute',
        right:15,
        top:5
    },
    content:{
        width:'100%',
        height:400,
        backgroundColor:'rgb(223,223,223)',
        marginTop:5,
        justifyContent:'center',
        alignItems:'center'
    },
    reactions:{
        width:'95%',
        height:50,
        //backgroundColor:'red',
        borderBottomWidth:1,
        borderColor:'rgb(223,223,223)',
        marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center'
    },
    numOfReacts:{
        width:"50%",
        height:30,
        //backgroundColor:'red',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:10
    },
    reacts:{
        width:30,
        height:30
    },
    numOfComments:{
        width:'50%',
        height:30,
        //backgroundColor:'green',
        flexDirection:'row',
        alignItems:'center'
    },
    commentsNum:{
        position:'absolute',
        right:20,
        color:'grey',
        fontWeight:'bold'
    },
    commentsText:{
        position:'absolute',
        right:90,
        color:'grey',
        fontWeight:'bold'
    },
    reactionOptions:{
        flexDirection:'row'
    },
    reactionOptionsText:{
        marginVertical:15,
        fontSize:18,
        color:'grey',
        fontWeight:'bold',
        //marginLeft:50
    }
})