import React, { FC, memo } from 'react';
import PageLayoutHeaderSvg from '../svg/page-layout-header.svg';

export interface IPageLayoutHeaderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageLayoutHeaderIcon: FC<IPageLayoutHeaderIconProps> = memo(props => {
  return <PageLayoutHeaderSvg {...props} />;
});
