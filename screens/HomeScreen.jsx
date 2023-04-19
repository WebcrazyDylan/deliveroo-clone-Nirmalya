import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[ _type == "featured" ] {
        ...,
        resturants[]->{
          ...,
          dishes[]->
        }
      }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* HEADER */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* SEARCH */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-md">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Resturants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* BODY */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        className="bg-gray-100"
      >
        {/* CATEGORIES */}
        <Categories />

        {/* FEATURED */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid Placement from Our Partners."
        />

        {/* TASTY DISCOUNT */}
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Enjoy these Juicy Discounts!"
        />

        {/* OFFERS NEAR YOU */}
        <FeaturedRow
          id="3"
          title="Offers Near You."
          description="Why not Support Local Resturants Tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
