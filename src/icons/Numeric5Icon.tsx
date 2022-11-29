import React, { FC, memo } from 'react';
import Numeric5Svg from '../svg/numeric-5.svg';

export interface INumeric5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric5Icon: FC<INumeric5IconProps> = memo(props => {
  return <Numeric5Svg {...props} />;
});
