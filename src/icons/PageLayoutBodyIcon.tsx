import React, { FC, memo } from 'react';
import PageLayoutBodySvg from '../svg/page-layout-body.svg';

export interface IPageLayoutBodyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageLayoutBodyIcon: FC<IPageLayoutBodyIconProps> = memo(props => {
  return <PageLayoutBodySvg {...props} />;
});
