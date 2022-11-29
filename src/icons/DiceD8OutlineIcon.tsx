import React, { FC, memo } from 'react';
import DiceD8OutlineSvg from '../svg/dice-d8-outline.svg';

export interface IDiceD8OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD8OutlineIcon: FC<IDiceD8OutlineIconProps> = memo(props => {
  return <DiceD8OutlineSvg {...props} />;
});
