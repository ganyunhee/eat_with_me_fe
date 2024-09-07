import { View, Text, Button, TouchableOpacityProps, TouchableOpacity } from "react-native"
import { Link } from "expo-router"
import { forwardRef } from "react";

type NavbarButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Navbar = forwardRef<TouchableOpacity,NavbarButtonProps>(
  () => {

    // vars for text on page
    const brandText = 'EatWithMe';

    return (
      <View
        className={`${styles.navbar}`}  
      >
        <Text className={styles.brandText}>{brandText}</Text>
      </View>
    )
  }
)

const styles = {
  navbar: 'p-12 bg-red',
  brandText: 'font-bold text-[30px]'
}