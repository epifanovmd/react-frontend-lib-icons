import React, { FC, memo } from 'react';
import RssSvg from '../svg/rss.svg';

export interface IRssIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RssIcon: FC<IRssIconProps> = memo(props => {
  return <RssSvg {...props} />;
});
