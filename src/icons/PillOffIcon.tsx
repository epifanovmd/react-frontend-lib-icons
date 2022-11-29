import React, { FC, memo } from 'react';
import PillOffSvg from '../svg/pill-off.svg';

export interface IPillOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PillOffIcon: FC<IPillOffIconProps> = memo(props => {
  return <PillOffSvg {...props} />;
});
