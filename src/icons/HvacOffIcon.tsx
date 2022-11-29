import React, { FC, memo } from 'react';
import HvacOffSvg from '../svg/hvac-off.svg';

export interface IHvacOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HvacOffIcon: FC<IHvacOffIconProps> = memo(props => {
  return <HvacOffSvg {...props} />;
});
