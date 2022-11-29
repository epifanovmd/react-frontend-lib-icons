import React, { FC, memo } from 'react';
import PipeDisconnectedSvg from '../svg/pipe-disconnected.svg';

export interface IPipeDisconnectedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PipeDisconnectedIcon: FC<IPipeDisconnectedIconProps> = memo(props => {
  return <PipeDisconnectedSvg {...props} />;
});
