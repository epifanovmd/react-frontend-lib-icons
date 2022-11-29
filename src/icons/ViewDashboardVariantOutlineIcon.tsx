import React, { FC, memo } from 'react';
import ViewDashboardVariantOutlineSvg from '../svg/view-dashboard-variant-outline.svg';

export interface IViewDashboardVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewDashboardVariantOutlineIcon: FC<IViewDashboardVariantOutlineIconProps> = memo(props => {
  return <ViewDashboardVariantOutlineSvg {...props} />;
});
