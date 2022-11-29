import React, { FC, memo } from 'react';
import ShieldHomeOutlineSvg from '../svg/shield-home-outline.svg';

export interface IShieldHomeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldHomeOutlineIcon: FC<IShieldHomeOutlineIconProps> = memo(props => {
  return <ShieldHomeOutlineSvg {...props} />;
});
