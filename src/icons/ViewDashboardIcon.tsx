import React, { FC, memo } from 'react';
import ViewDashboardSvg from '../svg/view-dashboard.svg';

export interface IViewDashboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewDashboardIcon: FC<IViewDashboardIconProps> = memo(props => {
  return <ViewDashboardSvg {...props} />;
});
