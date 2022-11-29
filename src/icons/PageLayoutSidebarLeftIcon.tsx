import React, { FC, memo } from 'react';
import PageLayoutSidebarLeftSvg from '../svg/page-layout-sidebar-left.svg';

export interface IPageLayoutSidebarLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageLayoutSidebarLeftIcon: FC<IPageLayoutSidebarLeftIconProps> = memo(props => {
  return <PageLayoutSidebarLeftSvg {...props} />;
});
