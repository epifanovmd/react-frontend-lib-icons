import React, { FC, memo } from 'react';
import RadiatorDisabledSvg from '../svg/radiator-disabled.svg';

export interface IRadiatorDisabledIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadiatorDisabledIcon: FC<IRadiatorDisabledIconProps> = memo(props => {
  return <RadiatorDisabledSvg {...props} />;
});
