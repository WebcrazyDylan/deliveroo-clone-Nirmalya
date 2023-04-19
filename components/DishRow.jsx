import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ id, name, desc, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 pb-1 border-gray-100 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{desc}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F4F4",
              }}
              className="h-20 w-20 bg-gray-300 p-4"
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-2">
            <TouchableOpacity>
              <MinusCircleIcon
                size={40}
                color="#00CCBB"
                // color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon
                size={40}
                color="#00CCBB"
                // color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
