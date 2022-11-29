import React, { FC, memo } from 'react';
import SitemapOutlineSvg from '../svg/sitemap-outline.svg';

export interface ISitemapOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SitemapOutlineIcon: FC<ISitemapOutlineIconProps> = memo(props => {
  return <SitemapOutlineSvg {...props} />;
});
