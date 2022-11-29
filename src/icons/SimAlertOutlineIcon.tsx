import React, { FC, memo } from 'react';
import SimAlertOutlineSvg from '../svg/sim-alert-outline.svg';

export interface ISimAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SimAlertOutlineIcon: FC<ISimAlertOutlineIconProps> = memo(props => {
  return <SimAlertOutlineSvg {...props} />;
});
