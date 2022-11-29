import React, { FC, memo } from 'react';
import RoomServiceSvg from '../svg/room-service.svg';

export interface IRoomServiceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RoomServiceIcon: FC<IRoomServiceIconProps> = memo(props => {
  return <RoomServiceSvg {...props} />;
});
