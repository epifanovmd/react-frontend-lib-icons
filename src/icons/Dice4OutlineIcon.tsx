import React, { FC, memo } from 'react';
import Dice4OutlineSvg from '../svg/dice-4-outline.svg';

export interface IDice4OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice4OutlineIcon: FC<IDice4OutlineIconProps> = memo(props => {
  return <Dice4OutlineSvg {...props} />;
});
