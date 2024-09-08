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
  const [chatLink, setChatLink] = useState<string>('www.example.chat');
  const [value, setValue] = useState<number | null>(null);

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

  const handleChangeLink = (value: string | null) => {
    if (value !== null) {
      setChatLink(value);
    }
  };

  // debugging with useEffect to see how state updates
  useEffect(() => {
    console.log(`Event name: ${name} \n Description: ${description} \n Maximum Attendees: ${maxMembers} \n Date: ${eventTime} \n Address: ${address} \n Link: ${chatLink}`);
  }, [name, description, maxMembers, eventTime, address, chatLink]);

  return (
    <StyledView className="flex-1 items-center justify-center bg-white pb-4">
      <StyledText className="mb-4 text-3xl font-bold">Create an Event</StyledText>

      {/* name for your event */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          placeholder="Talk Tech in Gangnam"
          onChangeText={handleChangeName}
          value={name}
        />
      </StyledView>

      {/* description for your event */}
      <StyledView className="w-full max-w-md">
        <TextInput
          editable
          multiline={true}
          className="mb-4 mt-2 rounded-md border-[1px] p-2 placeholder:italic"
          placeholder="Discuss the latest in generative AI technology with a group of..."
          maxLength={80}
          onChangeText={handleChangeDescription}
          value={description}
        />
      </StyledView>

      {/* input for time of the event */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          placeholder="Event Time"
          onChangeText={handleChangeTime}
          value={eventTime}
        />
      </StyledView>

      {/* input for address of the event */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          placeholder="Event Location"
          onChangeText={handleChangeAddress}
          value={address}
        />
      </StyledView>

      {/* input for a link to a chat room */}
      <StyledView className="w-full max-w-md">
        <StyledInput
          className=""
          placeholder="Group Chat Link"
          onChangeText={handleChangeLink}
          value={chatLink}
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
          onChangeValue={handleChangeAttendees} // Correctly use onChangeValue
        />
      </StyledView>
    </StyledView>
  );
};

export default CreateEvent;
  