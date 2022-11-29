import React, { FC, memo } from 'react';
import SubtitlesSvg from '../svg/subtitles.svg';

export interface ISubtitlesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SubtitlesIcon: FC<ISubtitlesIconProps> = memo(props => {
  return <SubtitlesSvg {...props} />;
});
