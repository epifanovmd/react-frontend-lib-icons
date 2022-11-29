import React, { FC, memo } from 'react';
import RssBoxSvg from '../svg/rss-box.svg';

export interface IRssBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RssBoxIcon: FC<IRssBoxIconProps> = memo(props => {
  return <RssBoxSvg {...props} />;
});
