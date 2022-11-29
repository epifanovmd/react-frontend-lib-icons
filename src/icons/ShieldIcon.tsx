import React, { FC, memo } from 'react';
import ShieldSvg from '../svg/shield.svg';

export interface IShieldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldIcon: FC<IShieldIconProps> = memo(props => {
  return <ShieldSvg {...props} />;
});
