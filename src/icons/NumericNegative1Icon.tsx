import React, { FC, memo } from 'react';
import NumericNegative1Svg from '../svg/numeric-negative-1.svg';

export interface INumericNegative1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NumericNegative1Icon: FC<INumericNegative1IconProps> = memo(props => {
  return <NumericNegative1Svg {...props} />;
});
