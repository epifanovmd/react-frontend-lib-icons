import React, { FC, memo } from 'react';
import ShieldMoonOutlineSvg from '../svg/shield-moon-outline.svg';

export interface IShieldMoonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldMoonOutlineIcon: FC<IShieldMoonOutlineIconProps> = memo(props => {
  return <ShieldMoonOutlineSvg {...props} />;
});
