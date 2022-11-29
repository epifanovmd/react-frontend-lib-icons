import React, { FC, memo } from 'react';
import ReplaySvg from '../svg/replay.svg';

export interface IReplayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReplayIcon: FC<IReplayIconProps> = memo(props => {
  return <ReplaySvg {...props} />;
});
