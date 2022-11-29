import React, { FC, memo } from 'react';
import Numeric3Svg from '../svg/numeric-3.svg';

export interface INumeric3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric3Icon: FC<INumeric3IconProps> = memo(props => {
  return <Numeric3Svg {...props} />;
});
