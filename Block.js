/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

const Block = ({
  absolute,
  children,
  center,
  right,
  middle,
  bottom,
  border,
  ml,
  mr,
  mt,
  mb,
  mv,
  mh,
  pl,
  pr,
  pt,
  pb,
  pv,
  ph,
  row,
  flex,
  width,
  height,
  style,
  br,
  bw,
  borderColor,
  bg,
  elevation,
  absBottom,
  absTop,
  absLeft,
  absRight,
}) => (
  <View
    style={{
      // flex
      flex: flex || null,
      flexDirection: row ? 'row' : 'column',
      justifyContent: middle ? 'center' : bottom ? 'flex-end' : null,
      alignItems: center ? 'center' : right ? 'flex-end' : null,
      // props
      position: absolute ? 'absolute' : null,
      top: absTop || null,
      bottom: absBottom || null,
      left: absLeft || null,
      right: absRight || null,
      width: width || null,
      height: height || null,
      backgroundColor: bg || null,
      // Border
      borderWidth: border || null,
      borderRadius: br || null,
      borderColor: borderColor || 'grey',
      elevation: elevation || null,
      // margin
      marginLeft: ml || null,
      marginTop: mt || null,
      marginBottom: mb || null,
      marginRight: mr || null,
      marginVertical: mv || null,
      marginHorizontal: mh || null,
      // padding
      paddingLeft: pl || null,
      paddingRight: pr || null,
      paddingTop: pt || null,
      paddingBottom: pb || null,
      paddingHorizontal: ph || null,
      paddingVertical: pv || null,
      ...style,
    }}>
    {children}
  </View>
);

export default Block;
