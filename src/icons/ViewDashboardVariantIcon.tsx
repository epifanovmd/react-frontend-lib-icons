import React, { FC, memo } from 'react';
import ViewDashboardVariantSvg from '../svg/view-dashboard-variant.svg';

export interface IViewDashboardVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewDashboardVariantIcon: FC<IViewDashboardVariantIconProps> = memo(props => {
  return <ViewDashboardVariantSvg {...props} />;
});
