import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextInput, Pressable, View, ViewProps, TextProps, TextInputProps, PressableProps } from 'react-native';
import { Link, LinkProps } from 'expo-router';

type StyledProps<T> = T & {
  className?: string;
  children?: ReactNode;
};

export const StyledView: React.FC<StyledProps<ViewProps>> = ({ children, className = '', ...props }) => (
  <View className={`${className}`} {...props}>
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
    className={`h-10 border rounded p-2.5 w-full my-2 mb-2 ${className}`}
    style={{ borderColor: "#C5C5C5" }}
    {...props}
  />
);

export const StyledButton: React.FC<StyledProps<PressableProps>> = ({ children, className = '', ...props }) => (
  <Pressable
    className={`bg-brand py-3 rounded-md active:bg-brand-light hover:bg-brand-light ${className}`}
    android_ripple={{ color: 'bg-blue-600', borderless: false }}
    {...props}
  >
    <Text className="text-white text-center font-bold">{children}</Text>
  </Pressable>
);

export const StyledContainer: React.FC<StyledProps<ViewProps>> = ({ children, className = '', ...props }) => (
  <View 
    className={`rounded-md border p-10`} 
    style={styles.input}
    {...props}
  >
    {children}
  </View>
);

export const StyledLink: React.FC<StyledProps<LinkProps<string>>> = ({ children, className = '', ...props }) => (
  <Link
    className={`font-bold hover:underline hover:decoration-2 ${className}`}
    style={styles.link}
    {...props}
  >
    {children}
  </Link>
);

const styles = StyleSheet.create({
  input: {
    borderColor: "#DFDBE7",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  link: {

  }
})