import React, { FC, memo } from 'react';
import SubtitlesOutlineSvg from '../svg/subtitles-outline.svg';

export interface ISubtitlesOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SubtitlesOutlineIcon: FC<ISubtitlesOutlineIconProps> = memo(props => {
  return <SubtitlesOutlineSvg {...props} />;
});
