import React, { FC, memo } from 'react';
import SunWirelessOutlineSvg from '../svg/sun-wireless-outline.svg';

export interface ISunWirelessOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunWirelessOutlineIcon: FC<ISunWirelessOutlineIconProps> = memo(props => {
  return <SunWirelessOutlineSvg {...props} />;
});
