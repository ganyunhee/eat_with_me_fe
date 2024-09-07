import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { StyledView, StyledText, StyledInput, StyledButton } from '~/components/StyledComponents';

interface FormProps {
  name: string;
  description: string;
  attendees: number | null;
  date: string;
  time: string;
  location: string;
  items: { label: number; value: number }[];
  open: boolean;
}

const createEvent = () => {
  // State for the entire form
  const [createEventFormValues, setCreateEventFormValues] = useState<FormProps>({
    name: '',
    description: '',
    attendees: null,
    date: '',
    time: '',
    location: '',
    items: [
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
      { label: 6, value: 6 },
      { label: 7, value: 7 },
      { label: 8, value: 8 },
    ],
    open: false,
  });

  // Function to handle changes in form fields
  const handleChange = (field: keyof FormProps) => (value: string | number | null) => {
    setCreateEventFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
    console.log(createEventFormValues);
  };

  // Handle dropdown open/close state
  const setOpen = (open: boolean) => {
    setCreateEventFormValues((prevValues) => ({
      ...prevValues,
      open,
    }));
  };

  return (
    <StyledView className="flex-1 items-center justify-center bg-white pb-4">
      <StyledText className="mb-1 text-3xl font-bold">Make your Event</StyledText>
      <StyledText className="mb-4 font-bold">
        Talk arts & crafts, sports, the latest in AI...
      </StyledText>

      <StyledView className="w-full max-w-md">
        <StyledInput
          placeholder="Talk Tech in Gangnam..."
          onChangeText={handleChange('name')}
          value={createEventFormValues.name}
        />
      </StyledView>

      <StyledView className="w-full max-w-md">
        <DropDownPicker
          placeholder="How many people do you want to invite?"
          open={createEventFormValues.open}
          value={createEventFormValues.attendees}
          items={createEventFormValues.items}
          setOpen={setOpen}
          setValue={handleChange('attendees')}
          onChangeValue={handleChange('attendees')}
        />
      </StyledView>
    </StyledView>
  );
};

export default createEvent;

const styles = StyleSheet.create({});

//     <StyledView className="bg-white flex-1 items-center justify-center pb-4">
//         <StyledText className="text-3xl font-bold mb-4">Login</StyledText>
//         <StyledView className="w-full max-w-sm bg-red-300">
//         <StyledText className="mb-2 mt-4">Email</StyledText>
//         <StyledInput
//           placeholder="Input your email here"
//           onChangeText={setEmail}
//           value={email}
//         />
//         <StyledText className="mb-2 mt-4">Password</StyledText>
//         <StyledInput
//           placeholder="Input your password here"
//           secureTextEntry={true}
//           onChangeText={setPassword}
//           value={password}
//         />
//         <Link
//           href="/home"
//           asChild
//           onPress={handleLogin}
//         >
//           <StyledButton className="mt-6">
//             Login
//           </StyledButton>
//         </Link>
//         </StyledView>
//     </StyledView>
//   )
// }

// export default login

// const styles = StyleSheet.create({})
