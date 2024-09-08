import React from 'react';
import { View, TextInput, Pressable, Platform, Text, Image } from 'react-native';
import { Link } from 'expo-router';

import SearchIcon from '../assets/search.svg';
import CalendarIcon from '../assets/calendar.svg';
import UsersIcon from '../assets/users.svg';
import FilterIcon from '../assets/filter.svg';

const WebHeader = () => {
  if (Platform.OS !== 'web') return null;

  return (
    <View className="flex-row items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      <Link href="/" className="mr-4">
          <Image source={require('../assets/logo.svg')} className="w-max h-max" />
      </Link>
      
      <View className="flex-row items-center flex-1 max-w-4xl">
        <View className="flex-row items-center flex-1 mr-2 bg-gray-100 rounded-md">
        <Image source={require('../assets/search.svg')} style={{ width: 20, height: 20, marginHorizontal: 8, tintColor: 'gray' }} />
          <TextInput
            placeholder="Search events..."
            className="flex-1 h-10 bg-transparent"
          />
        </View>
        
        <View className="flex-row items-center mr-2 bg-gray-100 rounded-md">
          <Image source={require('../assets/calendar.svg')} width={20} height={20} className="mx-2 text-gray-400" />
          <TextInput
            placeholder="Dates"
            className="w-24 h-10 bg-transparent"
          />
        </View>
        
        <View className="flex-row items-center mr-2 bg-gray-100 rounded-md">
          <Image source={require('../assets/people.svg')} width={20} height={20} className="mx-2 text-gray-400" />
          <TextInput
            placeholder="People"
            className="w-20 h-10 bg-transparent"
          />
        </View>
        
        <Pressable className="px-4 py-3 mr-2 text-white bg-brand rounded-md hover:bg-brand-light transition-all duration-300">
          <View className="flex-row items-center">
            <Text className="font-bold text-white">Search</Text>
          </View>
        </Pressable>
        
        <Pressable className="px-4 py-2 bg-brand rounded-md hover:bg-brand-light transition-all duration-300">
          <View className="flex-row items-center">
            <Image source={require('../assets/filter.svg')} width={20} height={20} className="mr-2 text-gray-600" />
            <Text className="font-bold text-white">Filter</Text>
          </View>
        </Pressable>

        <Pressable>
            <View className="flex-rows items-center ml-4">
                <Image source={require('../assets/menu.svg')} style={{ width: 50, height: 50 }} />
            </View>
        </Pressable>
      </View>
    </View>
  );
};

export default WebHeader;