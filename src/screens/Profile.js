import React from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native'

import Post from '../../components/Posts'

const posts = [1]


export default function Profile(props) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/******************** Header Pics ***************/}
            <View style={styles.pics}>
                {/******************** background Pic ***************/}
                <Image style={styles.background}
                    source={{uri:props.route.params.profileData.backgroundPic}} />
    
                {/******************** profile Pic ***************/}
                <Image style={styles.profile}
                    source={{uri:props.route.params.profileData.profilePic}} />
                {/******************** Name ***************/}
                <Text style={styles.name}>{props.route.params.profileData.name}</Text>
            </View>

            {/******************** Header buttons ***************/}
            <View style={styles.buttons}>
                {/******************** message button ***************/}
                <TouchableOpacity style={styles.message}>
                    <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>Message</Text>
                </TouchableOpacity>

                {/******************** friends button ***************/}
                <TouchableOpacity style={styles.option}>
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../imgs/friends4.png')} />
                </TouchableOpacity>

                {/******************** options button ***************/}
                <TouchableOpacity style={styles.option}>
                    <Image style={{ width: 30, height: 30, marginBottom: 10 }}
                        source={require('../../imgs/dotsMenu.png')} />
                </TouchableOpacity>
            </View>

            {/******************** divider ***************/}
            <View style={{ borderTopWidth: 2, borderColor: 'rgba(0,0,0,0.2)' ,marginHorizontal:10}}></View>

            {/******************** Info Section ***************/}
            <View style={styles.info}>

                {/******************** work info ***************/}
                <View style={styles.innerInfo}>
                    <Image style={{ width: 25, height: 25, alignSelf: 'center' }}
                        source={require('../../imgs/work.png')} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>Worked At </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{props.route.params.profileData.work}</Text>
                </View>

                {/******************** study info ***************/}
                <View style={[styles.innerInfo],{flexDirection:'row',marginTop:20}}>
                    <View style={{marginRight:20}}>
                    <Image style={{ width: 30, height: 30, alignSelf: 'center', marginLeft: -2 }}
                        source={require('../../imgs/study.png')} />
                    </View>
                   <View>
                   <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Studied At {props.route.params.profileData.study}</Text>
                   </View> 
                </View>

                {/******************** live info ***************/}
                <View style={styles.innerInfo}>
                    <Image style={{ width: 30, height: 30, alignSelf: 'center' }}
                        source={require('../../imgs/home.png')} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Lives in {props.route.params.profileData.city}</Text>
                </View>

                {/******************** single info ***************/}
                <View style={styles.innerInfo}>
                    <Image style={{ width: 25, height: 25, alignSelf: 'center', marginLeft: 5 }}
                        source={require('../../imgs/heart.png')} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>{props.route.params.profileData.maritalStatus}</Text>
                </View>

                {/******************** more info ***************/}
                <View style={styles.innerInfo}>
                    <Image style={{ width: 25, height: 25, alignSelf: 'center', marginTop: -5 }}
                        source={require('../../imgs/dotsMenu.png')} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>See {props.route.params.profileData.name}'s About Info</Text>
                </View>
            </View>

            {/******************** divider ***************/}
            <View style={{ borderTopWidth: 2, borderColor: 'rgba(0,0,0,0.2)' ,marginHorizontal:10}}></View>

            {/******************** Friends Section ***************/}
            <View style={styles.friends}>
                <View style={{ height: 70 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Friends</Text>
                    <Text style={{ fontSize: 19 }}>{props.route.params.profileData.mutualFriends} mutual friends</Text>
                </View>
                {/******************** Friends Pics ***************/}
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.freindsPic}>
                            <Image style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 10 }}
                                source={{uri:props.route.params.profileData.friendsPics[0]}} />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>{props.route.params.profileData.friendsNames[0]}</Text>
                        </View>
                        <View style={styles.freindsPic}>
                            <Image style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 10 }}
                                source={{uri:props.route.params.profileData.friendsPics[1]}} />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>{props.route.params.profileData.friendsNames[1]}</Text>
                        </View>
                        <View style={styles.freindsPic}>
                            <Image style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 10 }}
                                source={{uri:props.route.params.profileData.friendsPics[2]}} />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>{props.route.params.profileData.friendsNames[2]}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.freindsPic}>
                            <Image style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 10 }}
                                source={{uri:props.route.params.profileData.friendsPics[3]}} />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>{props.route.params.profileData.friendsNames[3]}</Text>
                        </View>
                        <View style={styles.freindsPic}>
                            <Image style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 10 }}
                                source={{uri:props.route.params.profileData.friendsPics[4]}} />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>{props.route.params.profileData.friendsNames[4]}</Text>
                        </View>
                        <View style={styles.freindsPic}>
                            <Image style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 10 }}
                                source={{uri:props.route.params.profileData.friendsPics[5]}} />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>{props.route.params.profileData.friendsNames[5]}</Text>
                        </View>
                    </View>

                {/******************** see all Friends button ***************/}
                </View>
                <TouchableOpacity style={{ height: 35, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10, marginHorizontal: 10, marginTop: 20, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>See All Friends</Text>
                </TouchableOpacity>

            </View>

            {/******************** write post Section ***************/}
            <View style={styles.writePost}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Posts</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10 }}
                            source={{uri:props.route.params.profileData.profilePic}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 15, fontSize: 16, color: 'grey' }}>Write something to {props.route.params.profileData.name}...</Text>
                    </TouchableOpacity>
                </View>
                {/******************** write post buttons ***************/}
                <View style={{ flexDirection: 'row', borderTopWidth: 0.5, borderBottomWidth: 0.5, height: 40, marginTop: 15 }}>
                    <TouchableOpacity style={{ flex: 1, borderRightWidth: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 20, }}
                            source={require('../../imgs/writepost.png')} />
                        <Text style={{ color: 'black', marginLeft: 10 }}>Write Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 30, height: 25, }}
                            source={require('../../imgs/photo.jpg')} />
                        <Text style={{ color: 'black', marginLeft: 10 }}>Share Photo</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/******************** shared posts Section ***************/}
            <FlatList
            style={{backgroundColor:'rgb(223,223,223)'}}
                    data={posts}
                    renderItem={
                        ({item}) =>{
                            return (
                                <Post 
                                    ownerPic={props.route.params.postData.postOwnerPath}
                                    postPic={props.route.params.postData.postPicPath}
                                    name={props.route.params.postData.name}
                                    time={props.route.params.postData.time}
                                    likes={props.route.params.postData.numOfLikes}
                                    comments={props.route.params.postData.numOfComments} 
                                />
                            )
                        }
                    }
                />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    writePost: {
        height: 170,
        paddingHorizontal: 10,
    },
    freindsPic: {
        flex: 1,
        marginTop: 10,
    },
    friends: {
        height: 470,
        paddingHorizontal: 5,
        marginHorizontal:10,
        marginTop: 10,
        marginBottom:10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    pics: {
        width: '100%',
        height: 400,
        marginTop: 20,
        paddingHorizontal:20

    },
    background: {
        width: '100%',
        height: 230,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    profile: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        position: 'absolute',
        borderColor: 'white',
        top: 130,
        left: 90
    },
    name: {
        alignSelf: 'center',
        marginTop: 120,
        fontWeight: 'bold',
        fontSize: 30
    },
    buttons: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        paddingHorizontal: 25
    },
    message: {
        width: '60%',
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    option: {
        width: '18%',
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    info: {
        height: 270,
        borderColor: 'rgba(0,0,0,0.2)',
        marginTop: -5,
        paddingHorizontal:20
    },
    innerInfo: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginTop: 20,
        flexWrap:'wrap'
    }
})