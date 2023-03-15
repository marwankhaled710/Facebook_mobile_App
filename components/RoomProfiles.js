import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'

export default function Profile(props) {
    return (
        <View >
            <Image
                borderRadius={30}
                style={styles.container}
                source={{uri:props.img}}
            />

            {props.active =='1' && <View style={{
                width: 20,
                height: 20,
                backgroundColor: 'green',
                borderRadius: 20,
                position: 'absolute',
                bottom: 0,
                right: 20,
                borderColor: 'white',
                borderWidth: 2
            }}></View>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        marginRight: 20,
        borderRadius: 30,
       // backgroundColor: 'red'
    }
})