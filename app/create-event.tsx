import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { StyledView, StyledText, StyledInput, StyledButton } from '~/components/StyledComponents';

const CreateEvent = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [maxMembers, setMaxMembers] = useState<number>(0);
  const [address, setAddress] = useState<string>('');
  const [items] = useState<{ label: string; value: number }[]>([
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
  ]);
  const [open, setOpen] = useState<boolean>(false);
  const [eventTime, setEventTime] = useState<string>('');
  const [chatLink, setChatLink] = useState<string>('');
  const [value, setValue] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>("");
  const [userId, setUserId] = useState("f67ab4ae-54f8-4686-b539-ff9348127eda");

  const handleOpenDropdown = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleChangeDescription = (value: string) => {
    setDescription(value);
  };

  const handleChangeAttendees = (value: number | null) => {
    if (value !== null) {
      setValue(value);
      setMaxMembers(value);
    }
  };

  const handleChangeTime = (value: string | null) => {
    if (value !== null) {
      setEventTime(value);
    }
  };

  const handleChangeAddress = (value: string | null) => {
    if (value !== null) {
      setAddress(value);
    }
  };

  const handleChangeCategory = (value: string | null) => {
    if (value!== null) {
      setCategory(value);
    }
  };

  const handleChangeLink = (value: string | null) => {
    if (value !== null) {
      setChatLink(value);
    }
  };

  // debugging with useEffect to see how state updates
  // useEffect(() => {
  //   console.log(`Event name: ${name} \n Description: ${description} \n Maximum Attendees: ${maxMembers} \n Date: ${eventTime} \n Address: ${address} \n Link: ${chatLink}`);
  // }, [name, description, maxMembers, eventTime, address, chatLink]);

  // handler for submitting data to API
  const handleSubmit = async () => {

    
    try {
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("event_name", name);
      urlEncodedData.append("category", category);
      urlEncodedData.append("address", address);
      urlEncodedData.append("user_id", userId);
      urlEncodedData.append("max_members", maxMembers);
      urlEncodedData.append("address", address);
      urlEncodedData.append("groupChat", chatLink);
      urlEncodedData.append("description", description);
      urlEncodedData.append("event_time", eventTime);
      
      const response = await fetch("https://qwer-wfvxm.run.goorm.site/create-event", {
        method: 'POST', // Make sure to specify the method
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData.toString(), // data can be `string` or {object}!
        credentials: "include",
      });
  
      if (response.ok) { 
        const data = await response.json(); 
        alert("Event successfully created!");
        console.log(data); 
      } else {
        alert("Creating event failed! Please try again");
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      alert("Creating event failed! Please try again");
      console.log(error);
    }
  }
  
  return (
    <StyledView className="flex-1 items-center justify-center bg-white pb-4 ">
      <StyledText className="mb-2 text-3xl font-bold">Make Your Event</StyledText>
      <StyledText className="mb-4 font-bold">Talk arts & crafts, sports, the latest in AI...</StyledText>

      {/* name for your event */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          className="border-black border-[1px] rounded-md"
          placeholder="Talk Tech in Gangnam"
          onChangeText={handleChangeName}
          value={name}
          placeholderTextColor="#777"
        />
      </StyledView>

      {/* description for your event */}
      <StyledView className="w-full max-w-md">
        <TextInput
          editable
          multiline={true}
          className="my-1 rounded-md border-[1px] p-2"
          placeholder="Discuss the latest in generative AI technology with a group of..."
          maxLength={80}
          onChangeText={handleChangeDescription}
          value={description}
          style={styles.input}
          placeholderTextColor="#777"
        />
      </StyledView>

      {/* input for time of the event */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          placeholder="Event Time"
          onChangeText={handleChangeTime}
          value={eventTime}
          placeholderTextColor="#777"
        />
      </StyledView>

      {/* input for address of the event */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          placeholder="Event Location"
          onChangeText={handleChangeAddress}
          value={address}
          placeholderTextColor="#777"
        />
      </StyledView>

      {/* input for address of the event */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          placeholder="Type of Food"
          onChangeText={handleChangeCategory}
          value={category}
          placeholderTextColor="#777"
        />
      </StyledView>

      {/* input for a link to a chat room */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          className=""
          placeholder="Group Chat Link"
          onChangeText={handleChangeLink}
          value={chatLink}
          placeholderTextColor="#777"
        />
      </StyledView>

      {/* drop down for number of guests to invite */}
      <StyledView className="w-full max-w-md">
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          items={items}
          setValue={setValue}
          value={value}
          onChangeValue={handleChangeAttendees} 
          
        />
      </StyledView>

      <StyledButton className="mt-6 max-w-md" onPress={handleSubmit}>Create Event</StyledButton>

    </StyledView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#bbb"
  }
})

export default CreateEvent;
  