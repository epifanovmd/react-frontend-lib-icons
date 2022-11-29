import React, { FC, memo } from 'react';
import BoomGateAlertOutlineSvg from '../svg/boom-gate-alert-outline.svg';

export interface IBoomGateAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateAlertOutlineIcon: FC<IBoomGateAlertOutlineIconProps> = memo(props => {
  return <BoomGateAlertOutlineSvg {...props} />;
});
