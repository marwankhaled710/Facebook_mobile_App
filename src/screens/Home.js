import React,{useEffect, useState} from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native'

import RoomProfiles from '../../components/RoomProfiles'
import Story from '../../components/Story'
import Post from '../../components/Posts'
import SuggestedPage from '../../components/suggestedPage'

export default function Home({ navigation }) {

    const profiles = [
        {
            id: '1',
            path: 'https://images.pexels.com/photos/1529619/pexels-photo-1529619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            active: '1'
        },
        {
            id: '2',
            path: 'https://images.pexels.com/photos/2884380/pexels-photo-2884380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            active: '0'
        },
        {
            id: '3',
            path: 'https://images.pexels.com/photos/3038411/pexels-photo-3038411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            active: '1'
        },
        {
            id: '4',
            path: 'https://images.pexels.com/photos/3568544/pexels-photo-3568544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            active: '1'
        },
        {
            id: '5',
            path: 'https://images.pexels.com/photos/5244426/pexels-photo-5244426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            active: '0'
        },
        {
            id: '6',
            path: 'https://images.pexels.com/photos/5333816/pexels-photo-5333816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            active: '1'
        },
    ]

    
const [stories,uploadStories] = useState();

const [posts,uploadPosts] = useState();

const [SuggestedPages,uploadSuggestedPages] = useState();

const [PostsProfiles,uploadPostsProfiles] = useState();

const [loaded,change] = useState("true");

useEffect(()=>{
    fetch("https://my-json-server.typicode.com/NermeenMoustafa/demo/db").then(res => {
        console.log("Responde is:", res);
        return res.json();
    }).then(jsonRes => {

        uploadStories(jsonRes.stories)
        uploadPosts(jsonRes.posts)
        uploadSuggestedPages(jsonRes.SuggestedPages)
        uploadPostsProfiles(jsonRes.PostsProfiles) 

        console.log("Json Responde stories: ",jsonRes.stories);
        change("false");
    }).catch(err => {
        console.log("Error", err);
        change("false");
    })
},[]);

    const goToProfileScreen = (navigation, postdata, profiledata) => {
        navigation.navigate('Profile', {
            postData:postdata,
            profileData: profiledata
        })
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/******************** Header ***************/}
            <View style={styles.header}>
                {/******************** Facebook Image ***************/}
                <Image
                    style={styles.facebookImage}
                    resizeMode='contain'
                    source={require('../../imgs/facebook2.png')} />
                {/******************** search Icon ***************/}
                <Image
                    style={styles.searchIcon}
                    resizeMode='contain'
                    source={require('../../imgs/search.png')} />

                {/******************** Messenger Icon ***************/}
                <Image
                    style={styles.messengerIcon}
                    resizeMode='contain'
                    source={require('../../imgs/messenger.png')} />
            </View>

            {/******************** Create Post ***************/}
            <View style={styles.createPost}>

                <View style={styles.post}>
                    {/******************** Profile Picture ***************/}
                    <Image
                        style={styles.profile}
                        //resizeMode='contain'
                        source={{uri:'https://images.pexels.com/photos/5333816/pexels-photo-5333816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />

                    <TextInput
                        style={styles.postText}
                        placeholder="What's on your mind?"
                        placeholderTextColor='black'
                    />

                </View>

                <View style={styles.choice}>
                    <TouchableOpacity style={styles.live}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 2 }}
                            resizeMode='contain'
                            source={require('../../imgs/live.png')} />
                        <Text style={styles.choiceText}>Live</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.photo}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 2 }}
                            resizeMode='contain'
                            source={require('../../imgs/photo.jpg')} />
                        <Text style={styles.choiceText}>Photo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.room}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 2 }}
                            resizeMode='contain'
                            source={require('../../imgs/room.png')} />
                        <Text style={styles.choiceText}>Room</Text>
                    </TouchableOpacity>

                </View>

            </View>

            {/******************** Create Room ***************/}
            <ScrollView style={styles.createRoom} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.roomIcon}>
                    <View style={{ flex: 1 }}>
                        <Image
                            style={styles.roomIconImage}
                            resizeMode='contain'
                            source={require('../../imgs/room.png')} />
                    </View>
                    <View style={styles.roomIconText}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Create</Text>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Room</Text>
                    </View>
                </View>

                {/******************** Room Friends Profiles List ***************/}
                <FlatList
                    horizontal

                    style={styles.friendsList}
                    data={profiles}
                    renderItem={
                        ({ item, index }) => {
                            return (
                                <RoomProfiles img={item.path} active={item.active} />
                            )
                        }
                    }
                />
            </ScrollView>


            {/******************** Create Story ***************/}
            <ScrollView style={styles.createStory} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.myStory}>
                    <Image
                        style={styles.myImageStory}
                        //resizeMode='contain'
                        source={{uri:'https://images.pexels.com/photos/5333816/pexels-photo-5333816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />


                    <Image
                        style={styles.addStory}
                        //resizeMode='cover'
                        source={require('../../imgs/add7.png')} />

                    <Text style={[styles.storyText, { marginTop: 155 }]}>Create a</Text>
                    <Text style={styles.storyText}>Story</Text>


                </View>

                <FlatList
                    horizontal
                    data={stories}
                    renderItem={
                        ({ item }) => {
                            return (
                                <Story
                                    storyImage={item.storyPicPath}
                                    storyOwner={item.storyOwnerPath}
                                    firstName={item.firstName}
                                    lastName={item.lastName} />
                            )
                        }
                    }
                />

            </ScrollView>

            {/******************** Suggested Pages ***************/}

            <ScrollView style={styles.SuggestedPages} >
                <View style={{ width: 180, height: 50 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 20 }}>Suggested Pages</Text>
                </View>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={SuggestedPages}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <SuggestedPage
                                        background={item.pageBackgroundPic}
                                        profile={item.pageProfilePic}
                                        name={item.name}
                                        field={item.field}
                                        likes={item.numOfLikes} />
                                )
                            }
                        }
                    />
                </View>

            </ScrollView>

            {/******************** Posts ***************/}

            <FlatList
                data={posts}
                renderItem={
                    ({ item ,index}) => {
                        return (
                            <Post
                                ownerPic={item.postOwnerPath}
                                postPic={item.postPicPath}
                                name={item.name} 
                                time={item.time}
                                likes={item.numOfLikes}
                                comments={item.numOfComments}

                                navigat={
                                    () => {
                                        goToProfileScreen(navigation,posts[index],PostsProfiles[index])
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
    storyText: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    addStory: {
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        bottom: 60,
        left: 40,
    },
    myImageStory: {
        width: 130,
        height: 130,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
       // top: -45
    },
    myStory: {
        width: 130,
        height: 215,
        margin: 15,
        borderRadius: 15,
        borderColor: 'grey',
        borderWidth: 1,
    },
    friendsList: {
        padding: 10
    },
    roomIconText: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: 10
    },
    roomIconImage: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 10
    },
    roomIcon: {
        backgroundColor: 'white',
        width: 110,
        height: 50,
        marginHorizontal: 10,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: 'dodgerblue',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    createRoom: {
        width: '100%',
        height: 80,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',

    },
    createStory: {
        width: '100%',
        height: 250,
        marginBottom: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    SuggestedPages: {
        width: '100%',
        height: 370,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    live: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10
    },
    choiceText: {
        color: 'black',
        fontWeight: 'bold'
    },
    photo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: 'grey',
        alignItems: 'center',
        paddingVertical: 10
    },
    room: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: 'grey',
        alignItems: 'center',
        paddingVertical: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'rgb(223,223,223)',
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
    createPost: {
        backgroundColor: 'white',
        width: '100%',
        height: 110,
    },
    choice: {
        flexDirection: 'row'
    },
    post: {
        width: '100%',
        height: 70,
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    postText: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 80,
        marginLeft: 10,
        width: "80%",
        height: 40
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 60
    },
    facebookImage: {
        width: 150,
        height: 50,
    },
    header: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderColor: 'grey',
        borderBottomWidth: 0.5
    },
    messengerIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 10
    },
    searchIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 60
    }
})

