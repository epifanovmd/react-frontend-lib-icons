import React, { FC, memo } from 'react';
import BeakerAlertSvg from '../svg/beaker-alert.svg';

export interface IBeakerAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerAlertIcon: FC<IBeakerAlertIconProps> = memo(props => {
  return <BeakerAlertSvg {...props} />;
});
