import React, { FC, memo } from 'react';
import ShieldAlertOutlineSvg from '../svg/shield-alert-outline.svg';

export interface IShieldAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldAlertOutlineIcon: FC<IShieldAlertOutlineIconProps> = memo(props => {
  return <ShieldAlertOutlineSvg {...props} />;
});
