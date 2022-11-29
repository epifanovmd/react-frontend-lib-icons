import React, { FC, memo } from 'react';
import NativescriptSvg from '../svg/nativescript.svg';

export interface INativescriptIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NativescriptIcon: FC<INativescriptIconProps> = memo(props => {
  return <NativescriptSvg {...props} />;
});
