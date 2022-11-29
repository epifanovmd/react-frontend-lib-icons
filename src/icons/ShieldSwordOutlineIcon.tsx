import React, { FC, memo } from 'react';
import ShieldSwordOutlineSvg from '../svg/shield-sword-outline.svg';

export interface IShieldSwordOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldSwordOutlineIcon: FC<IShieldSwordOutlineIconProps> = memo(props => {
  return <ShieldSwordOutlineSvg {...props} />;
});
