import React, { FC, memo } from 'react';
import DiceD8Svg from '../svg/dice-d8.svg';

export interface IDiceD8IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD8Icon: FC<IDiceD8IconProps> = memo(props => {
  return <DiceD8Svg {...props} />;
});
