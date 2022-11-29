import React, { FC, memo } from 'react';
import SoundcloudSvg from '../svg/soundcloud.svg';

export interface ISoundcloudIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SoundcloudIcon: FC<ISoundcloudIconProps> = memo(props => {
  return <SoundcloudSvg {...props} />;
});
