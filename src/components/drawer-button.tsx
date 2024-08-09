import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { Pressable, Text, View, PressableProps } from 'react-native'

export type IconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = PressableProps & {
  title: string
  isFocused?: boolean
  isDivider?: boolean
  iconName: IconNameProps
  notifications?: number
}

export function DrawerButton({
  title,
  isFocused,
  isDivider,
  iconName,
  notifications,
  ...rest
}: DrawerButtonProps) {
  return (
    <Pressable
      className={clsx('w-full py-2', {
        'border-b border-gray-500': isDivider,
      })}
      {...rest}
    >
      <View
        className={clsx('-ml-2 h-14 w-full flex-row items-center gap-4 px-6', {
          'rounded-r-full bg-orange-800': isFocused,
        })}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        <Text
          className={clsx('flex-1 font-subtitle text-base', {
            'text-white': !isFocused,
            'text-orange-300': isFocused,
          })}
        >
          {title}
        </Text>

        <Text
          className={clsx('font-body text-sm text-gray-400', {
            'text-orange-300': isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}
