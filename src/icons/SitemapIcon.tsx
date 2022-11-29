import React, { FC, memo } from 'react';
import SitemapSvg from '../svg/sitemap.svg';

export interface ISitemapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SitemapIcon: FC<ISitemapIconProps> = memo(props => {
  return <SitemapSvg {...props} />;
});
