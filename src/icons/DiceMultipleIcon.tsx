import React, { FC, memo } from 'react';
import DiceMultipleSvg from '../svg/dice-multiple.svg';

export interface IDiceMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceMultipleIcon: FC<IDiceMultipleIconProps> = memo(props => {
  return <DiceMultipleSvg {...props} />;
});
