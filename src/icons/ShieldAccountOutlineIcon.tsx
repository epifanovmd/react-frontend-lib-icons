import React, { FC, memo } from 'react';
import ShieldAccountOutlineSvg from '../svg/shield-account-outline.svg';

export interface IShieldAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldAccountOutlineIcon: FC<IShieldAccountOutlineIconProps> = memo(props => {
  return <ShieldAccountOutlineSvg {...props} />;
});
