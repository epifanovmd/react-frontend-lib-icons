import React, { FC, memo } from 'react';
import DiceD20OutlineSvg from '../svg/dice-d20-outline.svg';

export interface IDiceD20OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD20OutlineIcon: FC<IDiceD20OutlineIconProps> = memo(props => {
  return <DiceD20OutlineSvg {...props} />;
});
