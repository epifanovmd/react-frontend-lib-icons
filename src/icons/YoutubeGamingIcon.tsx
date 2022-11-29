import React, { FC, memo } from 'react';
import YoutubeGamingSvg from '../svg/youtube-gaming.svg';

export interface IYoutubeGamingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YoutubeGamingIcon: FC<IYoutubeGamingIconProps> = memo(props => {
  return <YoutubeGamingSvg {...props} />;
});
