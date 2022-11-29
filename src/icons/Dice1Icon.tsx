import React, { FC, memo } from 'react';
import Dice1Svg from '../svg/dice-1.svg';

export interface IDice1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice1Icon: FC<IDice1IconProps> = memo(props => {
  return <Dice1Svg {...props} />;
});
