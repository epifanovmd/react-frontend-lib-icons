import React, { FC, memo } from 'react';
import Dice5OutlineSvg from '../svg/dice-5-outline.svg';

export interface IDice5OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice5OutlineIcon: FC<IDice5OutlineIconProps> = memo(props => {
  return <Dice5OutlineSvg {...props} />;
});
