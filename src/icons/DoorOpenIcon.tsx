import React, { FC, memo } from 'react';
import DoorOpenSvg from '../svg/door-open.svg';

export interface IDoorOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorOpenIcon: FC<IDoorOpenIconProps> = memo(props => {
  return <DoorOpenSvg {...props} />;
});
