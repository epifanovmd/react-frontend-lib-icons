import React, { FC, memo } from 'react';
import RollerShadeClosedSvg from '../svg/roller-shade-closed.svg';

export interface IRollerShadeClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RollerShadeClosedIcon: FC<IRollerShadeClosedIconProps> = memo(props => {
  return <RollerShadeClosedSvg {...props} />;
});
