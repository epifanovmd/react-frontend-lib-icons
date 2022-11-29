import React, { FC, memo } from 'react';
import DiceD10OutlineSvg from '../svg/dice-d10-outline.svg';

export interface IDiceD10OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD10OutlineIcon: FC<IDiceD10OutlineIconProps> = memo(props => {
  return <DiceD10OutlineSvg {...props} />;
});
