import React, { FC, memo } from 'react';
import SoundbarSvg from '../svg/soundbar.svg';

export interface ISoundbarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SoundbarIcon: FC<ISoundbarIconProps> = memo(props => {
  return <SoundbarSvg {...props} />;
});
