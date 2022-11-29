import React, { FC, memo } from 'react';
import RollerSkateOffSvg from '../svg/roller-skate-off.svg';

export interface IRollerSkateOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RollerSkateOffIcon: FC<IRollerSkateOffIconProps> = memo(props => {
  return <RollerSkateOffSvg {...props} />;
});
