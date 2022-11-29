import React, { FC, memo } from 'react';
import ShieldSwordSvg from '../svg/shield-sword.svg';

export interface IShieldSwordIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldSwordIcon: FC<IShieldSwordIconProps> = memo(props => {
  return <ShieldSwordSvg {...props} />;
});
