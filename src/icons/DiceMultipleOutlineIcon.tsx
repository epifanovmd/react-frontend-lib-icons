import React, { FC, memo } from 'react';
import DiceMultipleOutlineSvg from '../svg/dice-multiple-outline.svg';

export interface IDiceMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceMultipleOutlineIcon: FC<IDiceMultipleOutlineIconProps> = memo(props => {
  return <DiceMultipleOutlineSvg {...props} />;
});
