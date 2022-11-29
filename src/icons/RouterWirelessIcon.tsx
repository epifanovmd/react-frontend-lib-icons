import React, { FC, memo } from 'react';
import RouterWirelessSvg from '../svg/router-wireless.svg';

export interface IRouterWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RouterWirelessIcon: FC<IRouterWirelessIconProps> = memo(props => {
  return <RouterWirelessSvg {...props} />;
});
