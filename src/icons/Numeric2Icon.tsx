import React, { FC, memo } from 'react';
import Numeric2Svg from '../svg/numeric-2.svg';

export interface INumeric2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric2Icon: FC<INumeric2IconProps> = memo(props => {
  return <Numeric2Svg {...props} />;
});
