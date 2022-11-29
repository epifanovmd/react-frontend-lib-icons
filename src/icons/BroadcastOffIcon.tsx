import React, { FC, memo } from 'react';
import BroadcastOffSvg from '../svg/broadcast-off.svg';

export interface IBroadcastOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BroadcastOffIcon: FC<IBroadcastOffIconProps> = memo(props => {
  return <BroadcastOffSvg {...props} />;
});
