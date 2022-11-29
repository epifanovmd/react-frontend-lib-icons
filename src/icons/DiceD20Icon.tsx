import React, { FC, memo } from 'react';
import DiceD20Svg from '../svg/dice-d20.svg';

export interface IDiceD20IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD20Icon: FC<IDiceD20IconProps> = memo(props => {
  return <DiceD20Svg {...props} />;
});
