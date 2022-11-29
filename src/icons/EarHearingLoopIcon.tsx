import React, { FC, memo } from 'react';
import EarHearingLoopSvg from '../svg/ear-hearing-loop.svg';

export interface IEarHearingLoopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarHearingLoopIcon: FC<IEarHearingLoopIconProps> = memo(props => {
  return <EarHearingLoopSvg {...props} />;
});
