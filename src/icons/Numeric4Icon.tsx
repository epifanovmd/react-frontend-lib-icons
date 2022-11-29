import React, { FC, memo } from 'react';
import Numeric4Svg from '../svg/numeric-4.svg';

export interface INumeric4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric4Icon: FC<INumeric4IconProps> = memo(props => {
  return <Numeric4Svg {...props} />;
});
