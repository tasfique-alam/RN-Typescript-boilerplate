import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors.config';
import Block from '../Block';
import {Theme, ThemeParser, useStyles} from '@/components/hooks';
import DropDownPicker from 'react-native-dropdown-picker';

interface IDropdown {
  color?: string;
  bgColor?: string;
  flexDirection?: any;
  placeholder?: any;
  theme?: any;
  searchable?: any;
  borderColor?: any;
  open?: any;
  value?: any;
  items?: any;
  setOpen?: any;
  setValue?: any;
  setItems?: any;
  width?: any;
  fontSize?: any;
  fontWeight?: any;
  borderWidthDropDown?: any;

  borderRadius?: number;
  borderWidth?: number;
  height?: number;
}

const Dropdown: React.FC<IDropdown> = ({
  color,
  bgColor,
  theme,
  searchable,
  borderColor,
  width,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  borderRadius,
  placeholder,
  borderWidth,
  flexDirection,
  fontSize,
  height,
  fontWeight,
  borderWidthDropDown,
}) => {
  const styles = useStyles(styleSheet);

  return (
    <>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        // arrowIconContainerStyle={{color: 'red'}}
        dropDownContainerStyle={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderRadius: borderRadius,
          zIndex: 20,
          width: width,
          borderWidth: borderWidthDropDown,
          // flexDirection: "column",
        }}
        labelStyle={{
          color: color,
          zIndex: 10,
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
        placeholderStyle={{
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          width: width,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          height: height,
          flexDirection: flexDirection,
          zIndex: 10,
          paddingLeft: 20,
        }}
        theme={theme}
        searchable={searchable}
        placeholder={placeholder}
      />
    </>
  );
};
const styleSheet = (theme: Theme, parseTheme: ThemeParser) => {
  return StyleSheet.create({});
};

export {Dropdown};
