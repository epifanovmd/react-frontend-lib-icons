import React, { FC, memo } from 'react';
import MeditationSvg from '../svg/meditation.svg';

export interface IMeditationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MeditationIcon: FC<IMeditationIconProps> = memo(props => {
  return <MeditationSvg {...props} />;
});
