import React, { FC, memo } from 'react';
import BroadcastSvg from '../svg/broadcast.svg';

export interface IBroadcastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BroadcastIcon: FC<IBroadcastIconProps> = memo(props => {
  return <BroadcastSvg {...props} />;
});
