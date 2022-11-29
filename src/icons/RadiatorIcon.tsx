import React, { FC, memo } from 'react';
import RadiatorSvg from '../svg/radiator.svg';

export interface IRadiatorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadiatorIcon: FC<IRadiatorIconProps> = memo(props => {
  return <RadiatorSvg {...props} />;
});
