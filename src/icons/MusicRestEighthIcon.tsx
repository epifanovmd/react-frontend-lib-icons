import React, { FC, memo } from 'react';
import MusicRestEighthSvg from '../svg/music-rest-eighth.svg';

export interface IMusicRestEighthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicRestEighthIcon: FC<IMusicRestEighthIconProps> = memo(props => {
  return <MusicRestEighthSvg {...props} />;
});
