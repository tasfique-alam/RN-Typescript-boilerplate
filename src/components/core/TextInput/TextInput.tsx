import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../config/colors.config';
import Block from '../Block';
import IconEye from 'react-native-vector-icons/Ionicons';

interface IPrimaryInput {
  // onPress?(): void,
  placeholder?: string;
  value?: string;
  onChangeText?(text: string): void;
  inputStyle?: any;
  onSubmit?: () => void;
  iconColor?: any;
  iconSize?: any;
  iconName?: any;
  blurOnSubmit?: any;
  secureTextEntry?: any;
  customIconStyle?: any;
  socialIcon?: boolean;
  LinearIconStyle?: any;
  insideInputStyle?: any;
  isSendIcon?: boolean;
}
interface ILoginInput {
  startIcon: any;
  endIcon?: any;
  placeholder?: string;
  iconName?: any;
  onIconPress?: any;
  secureTextEntry?: any;
  endIconVisible?: any;

  value?: string;
  onChangeText?(text: string): void;
}
interface ISearchInput {
  // onPress?(): void,
  placeholder?: string;
}
interface ITextArea {
  // onPress?(): void,
  placeholder?: string;
  value?: string;
  customTextAreaStyle?: any;
  numberOfLines?: number;
}

const PrimaryInput: React.FC<IPrimaryInput> = props => {
  const {
    inputStyle,
    iconName,
    iconSize,
    iconColor,
    onSubmit,
    blurOnSubmit,
    secureTextEntry,
    insideInputStyle,
    isSendIcon,
  } = props;
  return (
    <Block style={[styles.primaryInputContainer, inputStyle]}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#B9B9B9"
        style={[styles.primaryInput, insideInputStyle]}
        value={props.value}
        blurOnSubmit={blurOnSubmit}
        secureTextEntry={secureTextEntry}
        onChangeText={props.onChangeText}
      />
    </Block>
  );
};

const LoginInput: React.FC<ILoginInput> = ({
  startIcon,
  placeholder,
  endIcon,
  value,
  onChangeText,
  iconName,
  secureTextEntry,
  onIconPress,
  endIconVisible,
}) => {
  return (
    <Block style={styles.authInput}>
      {/* <Image source={startIcon} /> */}
      <TextInput
        style={styles.loginInput}
        placeholder={placeholder}
        placeholderTextColor={'#5E6670'}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      {iconName ? (
        <TouchableOpacity onPress={onIconPress}>
          <IconEye
            name={iconName}
            size={22}
            color={'#B857E0'}
            style={{paddingRight: 8}}
          />
        </TouchableOpacity>
      ) : (
        // endIconVisible ? (
        //   <Image source={endIcon} />
        // ) :
        <Block style={{width: 20}}></Block>
      )}
    </Block>
  );
};

const SearchInput: React.FC<ISearchInput> = props => {
  return <TextInput placeholder={props.placeholder} style={styles.input} />;
};

const TextArea: React.FC<ITextArea> = props => {
  const {customTextAreaStyle, numberOfLines, value} = props;
  return (
    <TextInput
      multiline={true}
      numberOfLines={numberOfLines}
      placeholder={props.placeholder}
      style={[styles.textArea, customTextAreaStyle]}
      value={value}
    />
  );
};
const styles = StyleSheet.create({
  primaryInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F7DDF1',
    borderRadius: 6,
    backgroundColor: 'rgba( 255, 255, 255, 0.2 )',
    paddingRight: 10,
  },
  primaryInput: {
    height: 42,
    padding: 10,
    width: '90%',
    color: 'white',
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.borderColor,
    fontSize: 16,
    borderRadius: 5,
  },
  loginInput: {
    color: '#5E6670',
    width: '80%',
    fontSize: 16,
    height: 38,
    fontFamily: 'Rubik-Regular',
  },
  authInput: {
    height: 38,
    fontSize: 16,
    borderWidth: 0,
    padding: 0,
    margin: 0,
    width: Dimensions.get('window').width - 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textArea: {
    borderWidth: 1,
    padding: 10,
    borderColor: colors.borderColor,
    fontSize: 16,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});
export {PrimaryInput, SearchInput, LoginInput, TextArea};
