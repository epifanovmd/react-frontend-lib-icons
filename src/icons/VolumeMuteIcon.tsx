import React, { FC, memo } from 'react';
import VolumeMuteSvg from '../svg/volume-mute.svg';

export interface IVolumeMuteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeMuteIcon: FC<IVolumeMuteIconProps> = memo(props => {
  return <VolumeMuteSvg {...props} />;
});
