import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[ _type == "featured" && _id == $id ] {
          ...,
          resturants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]
      `,
        { id }
      )
      .then((data) => {
        setResturants(data?.resturants);
      });
  }, []);

  console.log(resturants);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* ResturantCards */}
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/wru"
          title="text"
          rating={4.5}
          genre="Chineese"
          address="Mukundapur"
          short_description="short desc"
          dishes={[]}
          lon={1231232131}
          lat={3142342344}
        />
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/wru"
          title="text"
          rating={4.5}
          genre="Chineese"
          address="Mukundapur"
          short_description="short desc"
          dishes={[]}
          lon={1231232131}
          lat={3142342344}
        />
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/wru"
          title="text"
          rating={4.5}
          genre="Chineese"
          address="Mukundapur"
          short_description="short desc"
          dishes={[]}
          lon={1231232131}
          lat={3142342344}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
