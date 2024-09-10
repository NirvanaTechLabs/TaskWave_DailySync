import React, { memo, useCallback, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useAppContext } from "../Contexts/ThemeProvider";
import useThemeColors from "../Theme/useThemeMode";
import AssetsPath from "../Global/AssetsPath";
import TextString from "../Global/TextString";
import CustomSwitch from "./CustomSwitch";
import { FONTS, SIZE } from "../Global/Theme";
import { useNavigation } from "@react-navigation/native";

interface IHomeHeaderProps {
  title: string;
}

const WithBackHeader = ({ title }: IHomeHeaderProps) => {
  const colors = useThemeColors();
  const navigation = useNavigation();
  const { theme, toggleTheme } = useAppContext();
  const [isSwitchOn, setIsSwitchOn] = useState(theme !== "dark");

  useEffect(() => {
    const setValue = theme !== "dark";
    setIsSwitchOn(setValue);
  }, [theme]);

  const handleToggle = useCallback(
    (state: boolean) => {
      setIsSwitchOn(state);
      toggleTheme(state ? "light" : "dark");
    },
    [toggleTheme]
  );

  return (
    <Animated.View entering={FadeIn.duration(400)}>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate("BottomTab", { screen: "Home" })}
          style={[styles.menuIconView]}
        >
          <Image
            tintColor={colors.text}
            source={AssetsPath.ic_leftArrow}
            style={styles.menuIcon}
          />
        </Pressable>
        <View style={{ width: "71%" }}>
          <Text style={[styles.titleText, { color: colors.text }]}>
            {title}
          </Text>
        </View>
        <View style={{ width: "18%", alignSelf: "flex-end" }}>
          <View style={{ width: 70, height: 35 }}>
            <CustomSwitch isOn={isSwitchOn} onToggle={handleToggle} />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default memo(WithBackHeader);

const styles = StyleSheet.create({
  container: {
    width: SIZE.appContainWidth,
    paddingVertical: 10,
    overflow: "hidden",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuIconView: {
    width: "10%",
    height: 28,
    borderRadius: 5,
    justifyContent: "center",
  },
  menuIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  titleText: {
    fontSize: 24,
    fontFamily: FONTS.Medium,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
