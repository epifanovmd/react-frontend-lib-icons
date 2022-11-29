import React, { FC, memo } from 'react';
import Dice1OutlineSvg from '../svg/dice-1-outline.svg';

export interface IDice1OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice1OutlineIcon: FC<IDice1OutlineIconProps> = memo(props => {
  return <Dice1OutlineSvg {...props} />;
});
