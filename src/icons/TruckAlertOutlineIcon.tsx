import React, { FC, memo } from 'react';
import TruckAlertOutlineSvg from '../svg/truck-alert-outline.svg';

export interface ITruckAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckAlertOutlineIcon: FC<ITruckAlertOutlineIconProps> = memo(props => {
  return <TruckAlertOutlineSvg {...props} />;
});
