import React, { FC, memo } from 'react';
import DiceD6OutlineSvg from '../svg/dice-d6-outline.svg';

export interface IDiceD6OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD6OutlineIcon: FC<IDiceD6OutlineIconProps> = memo(props => {
  return <DiceD6OutlineSvg {...props} />;
});
