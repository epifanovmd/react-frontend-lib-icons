import React, { FC, memo } from 'react';
import BacteriaOutlineSvg from '../svg/bacteria-outline.svg';

export interface IBacteriaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BacteriaOutlineIcon: FC<IBacteriaOutlineIconProps> = memo(props => {
  return <BacteriaOutlineSvg {...props} />;
});
