import React, { FC, memo } from 'react';
import Numeric0Svg from '../svg/numeric-0.svg';

export interface INumeric0IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric0Icon: FC<INumeric0IconProps> = memo(props => {
  return <Numeric0Svg {...props} />;
});
