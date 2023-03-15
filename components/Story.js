import React from 'react'
import{
    View,
    StyleSheet,
    Image, 
    ImageBackground,
    Text
} from 'react-native'


export default function Story(props){
    return(
        <View>   
            {/*************** Story Image *************/}    
            <Image 
                style={styles.container}
                source={{uri:props.storyImage}}/>

            {/*************** Story Owner's Name *************/}   

            <Text style={styles.firstName}>{props.firstName}</Text>
            <Text style={styles.secondName}>{props.lastName}</Text>

            {/*************** Story Circle *************/}   

            <View style={styles.storyCircle}/>

            {/*************** Story Owner's Profile Picture *************/}

            <Image
                style={styles.profile}
                source={{uri:props.storyOwner}}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{ 
        width:130,
        height:215,
        marginVertical:15,
        marginHorizontal:10,
        borderRadius:20,
        
    },
    firstName:{
        position:'absolute',
        color:'white',
        bottom:50,
        left:25
    },
    secondName:{
        position:'absolute',
        color:'white',
        bottom:30,
        left:25
    },
    profile:{
        width:40,
        height:40,
        position:'absolute',
        top:30,
        left:25,
        borderRadius:60,
    },
    storyCircle:{
        borderWidth:2,
        borderColor:'blue',
        width:50,
        height:50,
        position:'absolute',
        borderRadius:60,
        top:25,
        left:20
    }
})
