import React, { FC, memo } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import useThemeColors from "../../../Theme/useThemeMode";
import { FONTS } from "../../../Global/Theme";

interface SettingProps {
  icon: number;
  title: string;
  onPress: () => void;
}

const SettingItem: FC<SettingProps> = ({ icon, title, onPress }) => {
  const style = styles();

  return (
    <Pressable style={style.itemContainer} onPress={onPress}>
      <View style={style.iconContainer}>
        <Image source={icon} style={style.icon} />
      </View>
      <Text style={style.title}>{title}</Text>
      <Text style={style.arrow}>▼</Text>
    </Pressable>
  );
};

const styles = () => {
  const colors = useThemeColors();

  return StyleSheet.create({
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderRadius: 15,
      backgroundColor: colors.reminderCardBackground,
    },
    iconContainer: {
      width: 30,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      width: 24,
      height: 24,
    },
    title: {
      flex: 1,
      marginLeft: 10,
      color: colors.white,
      fontSize: 17.5,
      fontFamily: FONTS.Medium,
    },
    arrow: {
      fontSize: 18,
      color: colors.white,
      fontFamily: FONTS.Medium,
    },
  });
};

export default memo(SettingItem);
