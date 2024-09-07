import React, { memo, useCallback, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useAppContext } from "../../../Contexts/ThemeProvider";
import AssetsPath from "../../../Global/AssetsPath";
import useThemeColors from "../../../Theme/useThemeMode";
import TextString from "../../../Global/TextString";
import { FONTS, SIZE } from "../../../Global/Theme";
import CustomSwitch from "../../../Components/CustomSwitch";

interface IHomeHeaderProps {
  hideGrid?: boolean;
  hideThemeButton?: boolean;
}

const HomeHeader = ({
  hideGrid,
  hideThemeButton = false,
}: IHomeHeaderProps) => {
  const { theme, toggleTheme } = useAppContext();
  const colors = useThemeColors();
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
        <View
          style={[
            styles.menuIconView,
            {
              backgroundColor: hideGrid ? "transparent" : colors.grayBackground,
            },
          ]}
        >
          {!hideGrid && (
            <Image source={AssetsPath.ic_menu} style={styles.menuIcon} />
          )}
          {hideGrid && hideThemeButton && (
            <Pressable style={styles.backButton}>
              <Image
                source={AssetsPath.ic_leftArrow}
                tintColor={colors.text}
                style={styles.menuIcon}
              />
            </Pressable>
          )}
        </View>
        <Text style={[styles.titleText, { color: colors.text }]}>
          {TextString.DailySync}
        </Text>
        <View style={{ width: 70, height: 35 }}>
          {!hideThemeButton && (
            <CustomSwitch isOn={isSwitchOn} onToggle={handleToggle} />
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    width: SIZE.appContainWidth,
    paddingVertical: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuIconView: {
    width: 28,
    height: 28,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  titleText: {
    left: 13,
    fontSize: 24,
    fontFamily: FONTS.Medium,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
