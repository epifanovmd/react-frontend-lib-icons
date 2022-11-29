import React, { FC, memo } from 'react';
import PageLayoutSidebarRightSvg from '../svg/page-layout-sidebar-right.svg';

export interface IPageLayoutSidebarRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageLayoutSidebarRightIcon: FC<IPageLayoutSidebarRightIconProps> = memo(props => {
  return <PageLayoutSidebarRightSvg {...props} />;
});
