import React, { FC, memo } from 'react';
import ViewDashboardOutlineSvg from '../svg/view-dashboard-outline.svg';

export interface IViewDashboardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewDashboardOutlineIcon: FC<IViewDashboardOutlineIconProps> = memo(props => {
  return <ViewDashboardOutlineSvg {...props} />;
});
