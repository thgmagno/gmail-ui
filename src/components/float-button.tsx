import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacityProps, View } from "react-native";

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <View
      className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-4 right-4 gap-1 flex-row items-center active:opacity-80"
    >
      {icon && (
        <MaterialIcons name="edit" size={22} color={colors.orange[500]} />
      )}
      <Text className="font-subtitle text-orange-500">Escrever</Text>
    </View>
  )
}