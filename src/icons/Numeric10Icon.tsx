import React, { FC, memo } from 'react';
import Numeric10Svg from '../svg/numeric-10.svg';

export interface INumeric10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric10Icon: FC<INumeric10IconProps> = memo(props => {
  return <Numeric10Svg {...props} />;
});
