import React, { FC, memo } from 'react';
import CeilingFanSvg from '../svg/ceiling-fan.svg';

export interface ICeilingFanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CeilingFanIcon: FC<ICeilingFanIconProps> = memo(props => {
  return <CeilingFanSvg {...props} />;
});
