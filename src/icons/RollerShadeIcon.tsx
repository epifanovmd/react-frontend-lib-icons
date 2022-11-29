import React, { FC, memo } from 'react';
import RollerShadeSvg from '../svg/roller-shade.svg';

export interface IRollerShadeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RollerShadeIcon: FC<IRollerShadeIconProps> = memo(props => {
  return <RollerShadeSvg {...props} />;
});
