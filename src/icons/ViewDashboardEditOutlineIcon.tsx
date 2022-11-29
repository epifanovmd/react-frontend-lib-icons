import React, { FC, memo } from 'react';
import ViewDashboardEditOutlineSvg from '../svg/view-dashboard-edit-outline.svg';

export interface IViewDashboardEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewDashboardEditOutlineIcon: FC<IViewDashboardEditOutlineIconProps> = memo(props => {
  return <ViewDashboardEditOutlineSvg {...props} />;
});
