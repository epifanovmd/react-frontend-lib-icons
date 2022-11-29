import React, { FC, memo } from 'react';
import VideoInputAntennaSvg from '../svg/video-input-antenna.svg';

export interface IVideoInputAntennaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoInputAntennaIcon: FC<IVideoInputAntennaIconProps> = memo(props => {
  return <VideoInputAntennaSvg {...props} />;
});
