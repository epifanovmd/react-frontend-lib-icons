import React, { FC, memo } from 'react';
import ViewDashboardEditSvg from '../svg/view-dashboard-edit.svg';

export interface IViewDashboardEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewDashboardEditIcon: FC<IViewDashboardEditIconProps> = memo(props => {
  return <ViewDashboardEditSvg {...props} />;
});
