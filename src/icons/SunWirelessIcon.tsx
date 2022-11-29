import React, { FC, memo } from 'react';
import SunWirelessSvg from '../svg/sun-wireless.svg';

export interface ISunWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunWirelessIcon: FC<ISunWirelessIconProps> = memo(props => {
  return <SunWirelessSvg {...props} />;
});
