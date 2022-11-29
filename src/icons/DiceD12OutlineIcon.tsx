import React, { FC, memo } from 'react';
import DiceD12OutlineSvg from '../svg/dice-d12-outline.svg';

export interface IDiceD12OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD12OutlineIcon: FC<IDiceD12OutlineIconProps> = memo(props => {
  return <DiceD12OutlineSvg {...props} />;
});
