import { StyleSheet, Text, View } from 'react-native'
import React, { ReactEventHandler, useState } from 'react'
import { StyledView, StyledText, StyledInput, StyledButton } from "~/components/StyledComponents"
import { Link } from "expo-router"

interface FormProps {
  name: string,
  description: string,
  date: string,
  time: string,
  location: string,
}

const createEvent = () => {

  // state for inputs
  const [inputs, setInputs] = useState<FormProps>({
    name: '',
    description: '',
    date: '',
    time: '',
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }))
  };

  return (
    <StyledView className="bg-white flex-1 items-center justify-center pb-4">
      <StyledText className="text-3xl font-bold mb-4">
        Create an Event
      </StyledText>
      <StyledView className="w-full max-w-sm">
        <StyledInput placeholder="Add an event name..."></StyledInput>
      </StyledView>
      <StyledView className="w-full max-w-sm">
        <StyledInput placeholder="Number of people to invite..."></StyledInput>
      </StyledView>
    </StyledView>
  )
}

export default createEvent

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