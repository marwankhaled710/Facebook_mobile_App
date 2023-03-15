import React, { useState,useEffect } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'

import Notif from '../../components/Notification'

export default function Home() {

    const [Notifications,uploadNotifications] = useState();

    const [loaded,change] = useState("true");

    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/NermeenMoustafa/demo/db").then(res => {
            console.log("Responde is:", res);
            return res.json();
        }).then(jsonRes => {
            uploadNotifications(jsonRes.Notifications)
            console.log("Json Responde stories: ",jsonRes.stories);
            change("false");
        }).catch(err => {
            console.log("Error", err);
            change("false");
        })
    },[]);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>

                {/******************** notification Image ***************/}
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Notifications</Text>

                {/******************** search Icon ***************/}
                <Image
                    style={styles.searchIcon}
                    source={require('../../imgs/search.png')} />
            </View>

            {/********************new ***************/}
            <View style={{ height: 40, marginTop: 25 }}>
                <Text style={styles.new}>New</Text>
            </View>

            <FlatList
                data={Notifications}
                renderItem={
                    ({ item, index }) => {
                        return (
                            <Notif
                                profile={item.profilePic}
                                name={item.name}
                                time={item.time}
                                seen={item.seen}

                        //  to change the color of the notification to white when it become seen

                                changeSeen={
                                    () => {
                                        const updateSeen = [...Notifications];
                                        let newSeen = { ...updateSeen[index] };
                                        newSeen.seen ++;
                                        updateSeen[index] = newSeen;
                                        uploadNotifications(updateSeen);
                                    }
                                }

                            />
                        )
                    }
                }
            />

            {/******************** Horizontal Line ***************/}
            <View style={styles.horizontalLine} />

            {/********************earlier ***************/}
            <View style={{ height: 40, marginTop: 25 }}>
                <Text style={styles.new}>Earlier</Text>
            </View>

            <FlatList
                data={Notifications}
                renderItem={
                    ({ item,index }) => {
                        return (
                            <Notif
                                profile={item.profilePic}
                                name={item.name}
                                time={item.time}
                                seen={item.seen}

                            //  to change the color of the notification to white when it become seen
                                changeSeen={
                                    () => {
                                        const updateSeen = [...Notifications];
                                        let newSeen = { ...updateSeen[index] };
                                        newSeen.seen ++;
                                        updateSeen[index] = newSeen;
                                        uploadNotifications(updateSeen);
                                    }
                                }
                            />
                        )
                    }
                }
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
    header: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        flexDirection: 'row'
    },
    searchIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 20
    },
    new: {
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20
    },
    horizontalLine: {
        borderTopWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 15,
        marginTop: 30
    }

})