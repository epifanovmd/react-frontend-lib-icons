import React, { FC, memo } from 'react';
import TabletDashboardSvg from '../svg/tablet-dashboard.svg';

export interface ITabletDashboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabletDashboardIcon: FC<ITabletDashboardIconProps> = memo(props => {
  return <TabletDashboardSvg {...props} />;
});
