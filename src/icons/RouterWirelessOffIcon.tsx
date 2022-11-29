import React, { FC, memo } from 'react';
import RouterWirelessOffSvg from '../svg/router-wireless-off.svg';

export interface IRouterWirelessOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RouterWirelessOffIcon: FC<IRouterWirelessOffIconProps> = memo(props => {
  return <RouterWirelessOffSvg {...props} />;
});
