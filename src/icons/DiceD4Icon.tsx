import React, { FC, memo } from 'react';
import DiceD4Svg from '../svg/dice-d4.svg';

export interface IDiceD4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD4Icon: FC<IDiceD4IconProps> = memo(props => {
  return <DiceD4Svg {...props} />;
});
