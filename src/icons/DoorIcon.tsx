import React, { FC, memo } from 'react';
import DoorSvg from '../svg/door.svg';

export interface IDoorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorIcon: FC<IDoorIconProps> = memo(props => {
  return <DoorSvg {...props} />;
});
