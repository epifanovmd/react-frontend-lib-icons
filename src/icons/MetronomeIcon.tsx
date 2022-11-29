import React, { FC, memo } from 'react';
import MetronomeSvg from '../svg/metronome.svg';

export interface IMetronomeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MetronomeIcon: FC<IMetronomeIconProps> = memo(props => {
  return <MetronomeSvg {...props} />;
});
