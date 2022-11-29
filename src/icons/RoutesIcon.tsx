import React, { FC, memo } from 'react';
import RoutesSvg from '../svg/routes.svg';

export interface IRoutesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RoutesIcon: FC<IRoutesIconProps> = memo(props => {
  return <RoutesSvg {...props} />;
});
