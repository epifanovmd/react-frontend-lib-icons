import React, { FC, memo } from 'react';
import Numeric7Svg from '../svg/numeric-7.svg';

export interface INumeric7IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric7Icon: FC<INumeric7IconProps> = memo(props => {
  return <Numeric7Svg {...props} />;
});
