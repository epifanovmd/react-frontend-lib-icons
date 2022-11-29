import React, { FC, memo } from 'react';
import SurroundSoundSvg from '../svg/surround-sound.svg';

export interface ISurroundSoundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SurroundSoundIcon: FC<ISurroundSoundIconProps> = memo(props => {
  return <SurroundSoundSvg {...props} />;
});
