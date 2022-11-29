import React, { FC, memo } from 'react';
import Numeric8Svg from '../svg/numeric-8.svg';

export interface INumeric8IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric8Icon: FC<INumeric8IconProps> = memo(props => {
  return <Numeric8Svg {...props} />;
});
