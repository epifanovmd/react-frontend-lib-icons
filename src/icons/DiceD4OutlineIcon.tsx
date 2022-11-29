import React, { FC, memo } from 'react';
import DiceD4OutlineSvg from '../svg/dice-d4-outline.svg';

export interface IDiceD4OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD4OutlineIcon: FC<IDiceD4OutlineIconProps> = memo(props => {
  return <DiceD4OutlineSvg {...props} />;
});
