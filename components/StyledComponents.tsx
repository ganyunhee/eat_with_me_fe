import React, { ReactNode } from 'react';
import { Text, TextInput, Pressable, View, ViewProps, TextProps, TextInputProps, PressableProps } from 'react-native';

type StyledProps<T> = T & {
  className?: string;
  children?: ReactNode;
};

export const StyledView: React.FC<StyledProps<ViewProps>> = ({ children, className = '', ...props }) => (
  <View className="bg-white flex-1 items-center justify-center pb-4" {...props}>
    {children}
  </View>
);

export const StyledText: React.FC<StyledProps<TextProps>> = ({ children, className = '', ...props }) => (
  <Text className={`${className}`} {...props}>
    {children}
  </Text>
);

export const StyledInput: React.FC<StyledProps<TextInputProps>> = ({ className = '', ...props }) => (
  <TextInput
    className={`h-10 border rounded p-2.5 w-full focus:border-blue-400 ${className}`}
    {...props}
  />
);

export const StyledButton: React.FC<StyledProps<PressableProps>> = ({ children, className = '', ...props }) => (
  <Pressable
    className={`bg-blue-400 py-3 rounded-md active:bg-blue-600 ${className}`}
    android_ripple={{ color: 'bg-blue-600', borderless: false }}
    {...props}
  >
    <Text className="text-white text-center font-bold">{children}</Text>
  </Pressable>
);