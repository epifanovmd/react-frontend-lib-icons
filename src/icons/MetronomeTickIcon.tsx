import React, { FC, memo } from 'react';
import MetronomeTickSvg from '../svg/metronome-tick.svg';

export interface IMetronomeTickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MetronomeTickIcon: FC<IMetronomeTickIconProps> = memo(props => {
  return <MetronomeTickSvg {...props} />;
});
