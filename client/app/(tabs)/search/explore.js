import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import CardHeader from "../../../components/postCard/CardHeader";
import CardBody from "../../../components/postCard/CardBody";
import CardFooter from "../../../components/postCard/CardFooter";

import { useSelector } from "react-redux";

const explore = () => {
  const { explore, homePosts } = useSelector((state) => ({
    explore: state.explore,
    homePosts: state.homePosts,
  }));
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let postData = homePosts.posts.find((post) => post._id === id);
    if (!postData) {
      postData = explore.posts.find((post) => post._id === id);
    }
    setPost(postData);
  }, [homePosts.posts, explore.posts, id]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      
      <ScrollView className="mt-2" showsVerticalScrollIndicator={false}>
        {post && (
          <View className="mb-2 border-b-[0.5px] border-borderColor">
            <CardHeader post={post} showFollow />
            <View style={{ height: 400 }}>
              <CardBody post={post} />
            </View>
            <CardFooter post={post} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default explore;
