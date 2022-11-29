import React, { FC, memo } from 'react';
import ShieldSunOutlineSvg from '../svg/shield-sun-outline.svg';

export interface IShieldSunOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldSunOutlineIcon: FC<IShieldSunOutlineIconProps> = memo(props => {
  return <ShieldSunOutlineSvg {...props} />;
});
