import React, { FC, memo } from 'react';
import NumericPositive1Svg from '../svg/numeric-positive-1.svg';

export interface INumericPositive1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NumericPositive1Icon: FC<INumericPositive1IconProps> = memo(props => {
  return <NumericPositive1Svg {...props} />;
});
