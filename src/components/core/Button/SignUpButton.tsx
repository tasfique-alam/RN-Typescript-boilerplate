import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '@/config';
import {color} from 'react-native-reanimated';
import Block from '../Block';
import {Theme, ThemeParser, useStyles} from '@/components/hooks/useStyles';

interface ISignUpButton {
  width: any;
  height: number;
  radius: number;
  margin?: number;
  text: string;
  colorss?: any;
  borderColor?: any;
  loading?: any;
  disable?: any;
  bgColor?: any;
  customTextColor?: any;
  onPress?(): void;
}

export const SignUpButton: React.FC<ISignUpButton> = props => {
  const styles = useStyles(styleSheet);
  const {
    width,
    height,
    text,
    radius = 0,
    margin,
    bgColor,
    borderColor,
    loading,
    disable,
    customTextColor,
  } = props;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={disable}
      activeOpacity={0.7}>
      <Block
        style={{
          width,
          height,
          borderWidth: 1,
          backgroundColor: bgColor,
          borderColor: borderColor ? borderColor : '#4E1187',
          borderRadius: radius,
          alignItems: 'center',
          justifyContent: 'center',
          margin,
        }}>
        {loading ? (
          <ActivityIndicator size={'small'} color={colors.white} />
        ) : (
          <Text style={[styles.text, customTextColor]}>{text}</Text>
        )}
      </Block>
    </TouchableOpacity>
  );
};

const styleSheet = (theme: Theme, parseTheme: ThemeParser) => {
  return StyleSheet.create({
    text: {
      color: parseTheme('#242424', '#fff'),
      fontSize: 16,
      fontFamily: 'Rubik-Regular',
    },
  });
};
