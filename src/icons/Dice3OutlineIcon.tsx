import React, { FC, memo } from 'react';
import Dice3OutlineSvg from '../svg/dice-3-outline.svg';

export interface IDice3OutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice3OutlineIcon: FC<IDice3OutlineIconProps> = memo(props => {
  return <Dice3OutlineSvg {...props} />;
});
