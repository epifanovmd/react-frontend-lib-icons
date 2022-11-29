import React, { FC, memo } from 'react';
import Dice6Svg from '../svg/dice-6.svg';

export interface IDice6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice6Icon: FC<IDice6IconProps> = memo(props => {
  return <Dice6Svg {...props} />;
});
