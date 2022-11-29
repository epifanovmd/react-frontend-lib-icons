import React, { FC, memo } from 'react';
import MusicRestQuarterSvg from '../svg/music-rest-quarter.svg';

export interface IMusicRestQuarterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicRestQuarterIcon: FC<IMusicRestQuarterIconProps> = memo(props => {
  return <MusicRestQuarterSvg {...props} />;
});
