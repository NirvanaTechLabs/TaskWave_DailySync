import React, { FC, memo } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import AssetsPath from "../../../Global/AssetsPath";
import useThemeColors from "../../../Theme/useThemeMode";
import { FONTS } from "../../../Global/Theme";

interface NextButtonProps {
  scrollTo: () => void;
}

const NextButton: FC<NextButtonProps> = ({ scrollTo }) => {
  const style = styles();
  return (
    <Pressable onPress={scrollTo} style={style.container}>
      <Text style={style.text}>Next</Text>
    </Pressable>
  );
};

export default memo(NextButton);

const styles = () => {
  const colors = useThemeColors();

  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignSelf: "center",
      marginVertical: 40,
      width: 130,
      height: 40,
      backgroundColor: "rgba(64, 93, 240, 1)",
      borderRadius: 50,
    },
    icon: {
      width: 15,
      height: 15,
      justifyContent: "center",
      alignSelf: "center",
    },
    text: {
      fontSize: 19,
      textAlign: "center",
      color: colors.white,
      fontFamily: FONTS.Medium,
    },
  });
};
