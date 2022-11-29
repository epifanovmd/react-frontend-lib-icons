import React, { FC, memo } from 'react';
import PageLayoutFooterSvg from '../svg/page-layout-footer.svg';

export interface IPageLayoutFooterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageLayoutFooterIcon: FC<IPageLayoutFooterIconProps> = memo(props => {
  return <PageLayoutFooterSvg {...props} />;
});
