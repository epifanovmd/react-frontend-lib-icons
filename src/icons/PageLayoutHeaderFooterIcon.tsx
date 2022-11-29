import React, { FC, memo } from 'react';
import PageLayoutHeaderFooterSvg from '../svg/page-layout-header-footer.svg';

export interface IPageLayoutHeaderFooterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageLayoutHeaderFooterIcon: FC<IPageLayoutHeaderFooterIconProps> = memo(props => {
  return <PageLayoutHeaderFooterSvg {...props} />;
});
