import React, { FC, memo } from 'react';
import ShieldLockOpenOutlineSvg from '../svg/shield-lock-open-outline.svg';

export interface IShieldLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldLockOpenOutlineIcon: FC<IShieldLockOpenOutlineIconProps> = memo(props => {
  return <ShieldLockOpenOutlineSvg {...props} />;
});
