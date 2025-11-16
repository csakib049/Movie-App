import { createSettingsStyles } from "@/assets/images/styles/settings.style";
import DangerZone from "@/Components/DangerZone";
import Preferences from "@/Components/Preferences";
import ProgressStats from "@/Components/ProgressStats";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";





const SettingsScreen = () => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={settingsStyles.container}>
      <SafeAreaView style={settingsStyles.safeArea}>
        {/* HEADER */}
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
              <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
          showsVerticalScrollIndicator={false}
        >
           <ProgressStats />
           <Preferences/>
           <DangerZone/>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default SettingsScreen;