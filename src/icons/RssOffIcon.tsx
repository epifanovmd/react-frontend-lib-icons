import React, { FC, memo } from 'react';
import RssOffSvg from '../svg/rss-off.svg';

export interface IRssOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RssOffIcon: FC<IRssOffIconProps> = memo(props => {
  return <RssOffSvg {...props} />;
});
