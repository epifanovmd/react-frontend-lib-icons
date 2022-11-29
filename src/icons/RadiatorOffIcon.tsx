import React, { FC, memo } from 'react';
import RadiatorOffSvg from '../svg/radiator-off.svg';

export interface IRadiatorOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadiatorOffIcon: FC<IRadiatorOffIconProps> = memo(props => {
  return <RadiatorOffSvg {...props} />;
});
