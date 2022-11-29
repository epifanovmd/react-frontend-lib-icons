import React, { FC, memo } from 'react';
import YoutubeTvSvg from '../svg/youtube-tv.svg';

export interface IYoutubeTvIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YoutubeTvIcon: FC<IYoutubeTvIconProps> = memo(props => {
  return <YoutubeTvSvg {...props} />;
});
