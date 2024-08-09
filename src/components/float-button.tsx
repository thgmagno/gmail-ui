import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacityProps, View } from 'react-native'

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <View className="absolute bottom-4 right-4 flex-row items-center gap-1 rounded-full bg-gray-600 px-4 py-3 active:opacity-80">
      {icon && (
        <MaterialIcons name="edit" size={22} color={colors.orange[500]} />
      )}
      <Text className="font-subtitle text-orange-500">Escrever</Text>
    </View>
  )
}
