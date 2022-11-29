import React, { FC, memo } from 'react';
import Dice6OutlineSvg from '../svg/dice-6-outline.svg';

export interface IDice6OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice6OutlineIcon: FC<IDice6OutlineIconProps> = memo(props => {
  return <Dice6OutlineSvg {...props} />;
});
