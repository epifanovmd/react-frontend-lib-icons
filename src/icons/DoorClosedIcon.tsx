import React, { FC, memo } from 'react';
import DoorClosedSvg from '../svg/door-closed.svg';

export interface IDoorClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorClosedIcon: FC<IDoorClosedIconProps> = memo(props => {
  return <DoorClosedSvg {...props} />;
});
