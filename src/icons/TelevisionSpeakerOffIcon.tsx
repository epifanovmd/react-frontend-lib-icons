import React, { FC, memo } from 'react';
import TelevisionSpeakerOffSvg from '../svg/television-speaker-off.svg';

export interface ITelevisionSpeakerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionSpeakerOffIcon: FC<ITelevisionSpeakerOffIconProps> = memo(props => {
  return <TelevisionSpeakerOffSvg {...props} />;
});
