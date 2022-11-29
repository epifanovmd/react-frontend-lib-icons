import React, { FC, memo } from 'react';
import Dice2OutlineSvg from '../svg/dice-2-outline.svg';

export interface IDice2OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice2OutlineIcon: FC<IDice2OutlineIconProps> = memo(props => {
  return <Dice2OutlineSvg {...props} />;
});
