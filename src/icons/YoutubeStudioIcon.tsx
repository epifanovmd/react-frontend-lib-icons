import React, { FC, memo } from 'react';
import YoutubeStudioSvg from '../svg/youtube-studio.svg';

export interface IYoutubeStudioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YoutubeStudioIcon: FC<IYoutubeStudioIconProps> = memo(props => {
  return <YoutubeStudioSvg {...props} />;
});
