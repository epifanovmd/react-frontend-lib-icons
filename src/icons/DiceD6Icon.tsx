import React, { FC, memo } from 'react';
import DiceD6Svg from '../svg/dice-d6.svg';

export interface IDiceD6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD6Icon: FC<IDiceD6IconProps> = memo(props => {
  return <DiceD6Svg {...props} />;
});
