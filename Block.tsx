import React from 'react';
import { View } from 'react-native';

interface Props {
  absolute?: boolean;
  children?: JSX.Element | JSX.Element[];
  center?: boolean;
  right?: boolean;
  middle?: boolean;
  bottom?: boolean;
  b?: number;
  m?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  mv?: number;
  mh?: number;
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  pv?: number;
  ph?: number;
  row?: boolean;
  flex?: number;
  w?: number;
  w100?: boolean;
  h?: number;
  h100?: boolean;
  style?: any;
  br?: number;
  borderColor?: string;
  bg?: string;
  elevation?: number;
  absBottom?: number;
  absTop?: number;
  absLeft?: number;
  absRight?: number;
  overflow?: string;
  spaced?: boolean;
  z?: number;
  flexwrap?: boolean;
  ratio?: number;
  shadow?: boolean;
  minHeight?: number;
  maxHeight?: number;
  opacity?: number;
}

const shadowProps = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
};

export const Block: React.FC<Props> = ({
  absolute,
  children,
  center,
  right,
  middle,
  bottom,
  b,
  m,
  ml,
  mr,
  mt,
  mb,
  mv,
  mh,
  p,
  pl,
  pr,
  pt,
  pb,
  pv,
  ph,
  row,
  flex,
  w,
  w100,
  h,
  h100,
  style,
  br,
  borderColor,
  bg,
  elevation,
  absBottom,
  absTop,
  absLeft,
  absRight,
  overflow,
  spaced,
  z,
  flexwrap,
  ratio,
  shadow,
  minHeight,
  maxHeight,
  opacity,
}) => {
  const styleObject = {
    // flex
    flex: flex || null,
    flexWrap: flexwrap || null,
    aspectRatio: ratio || null,
    flexDirection: row ? 'row' : 'column',
    justifyContent: middle
      ? 'center'
      : bottom
      ? 'flex-end'
      : spaced
      ? 'space-between'
      : null,
    alignItems: center ? 'center' : right ? 'flex-end' : null,
    // view
    zIndex: z || null,
    position: absolute ? 'absolute' : null,
    top: absTop || null,
    bottom: absBottom || null,
    left: absLeft || null,
    right: absRight || null,
    width: w100 ? '100%' : w || null,
    height: h100 ? '100%' : h || null,
    minHeight: minHeight || null,
    maxHeight: maxHeight || null,
    backgroundColor: bg || '',
    overflow: overflow || null,
    opacity: opacity || null,
    // Border
    borderWidth: b || null,
    borderRadius: br || null,
    borderColor: borderColor || 'grey',
    elevation: elevation || null,
    // margin
    margin: m || null,
    marginLeft: ml || null,
    marginTop: mt || null,
    marginBottom: mb || null,
    marginRight: mr || null,
    marginVertical: mv || null,
    marginHorizontal: mh || null,
    // padding
    padding: p || null,
    paddingLeft: pl || null,
    paddingRight: pr || null,
    paddingTop: pt || null,
    paddingBottom: pb || null,
    paddingHorizontal: ph || null,
    paddingVertical: pv || null,
    ...(shadow ? shadowProps : null),
    ...style,
  };

  return <View style={styleObject}>{children}</View>;
};
