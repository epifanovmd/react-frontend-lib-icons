import React, { FC, memo } from 'react';
import Numeric6Svg from '../svg/numeric-6.svg';

export interface INumeric6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric6Icon: FC<INumeric6IconProps> = memo(props => {
  return <Numeric6Svg {...props} />;
});
