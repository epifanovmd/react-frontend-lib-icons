import React, { FC, memo } from 'react';
import BacteriaSvg from '../svg/bacteria.svg';

export interface IBacteriaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BacteriaIcon: FC<IBacteriaIconProps> = memo(props => {
  return <BacteriaSvg {...props} />;
});
