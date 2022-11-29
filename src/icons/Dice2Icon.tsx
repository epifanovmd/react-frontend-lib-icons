import React, { FC, memo } from 'react';
import Dice2Svg from '../svg/dice-2.svg';

export interface IDice2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice2Icon: FC<IDice2IconProps> = memo(props => {
  return <Dice2Svg {...props} />;
});
