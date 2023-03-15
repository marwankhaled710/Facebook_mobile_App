import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'

export default function Notif(props) {
    return (
        <View>
            <TouchableOpacity 
                //background color of the notification depends on whether it has been seen or not
                style={[styles.container,{backgroundColor: props.seen == 0 ? 'rgba(131,186,225,0.4)' : 'white'}]}
                //to change the value of 'seen' in the array 
                onPress={
                    ()=>{
                        props.changeSeen()
                    }
                    }
                >

                {/******************** reactor Image ***************/}
                <Image
                    style={styles.reactorimage}
                    source={{uri:props.profile}} />
                {/******************** reaction Image ***************/}
                <Image
                    style={styles.reactionimage}
                    source={require('../imgs/like14.png')} />
                {/******************** Notification Info ***************/}
                <View style={styles.notifInfo}>
                    <Text style={[styles.reactorname]}>{props.name}</Text>
                    <Text style={styles.reaction}>reacted to a post you shared</Text>
                    <Text style={styles.time}>{props.time}</Text>
                </View>

                {/******************** dots Menu Icon ***************/}
                <Image
                    style={styles.dotIcon}
                    resizeMode='contain'
                    source={require('../imgs/dotsMenu.png')} />

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 100,
        paddingHorizontal: 15,
       
    },
    reactorimage: {
        width: 80,
        height: 80,
        borderRadius: 40,

    },
    dotIcon: {
        width: 30,
        height: 30,
    },
    reactorname: {
        fontWeight: 'bold',
        fontSize: 18
    },
    reaction: {
        fontSize: 17
    },
    time: {
        fontSize: 16,
        color: 'grey'
    },
    notifInfo: {
        width: 243,
        height: 75,
        marginLeft: 10,
        justifyContent: 'center'
    },
    reactionimage: {
        width: 50,
        height: 50,
        position: 'absolute',
        left: 55,
        bottom: 0
    }
})