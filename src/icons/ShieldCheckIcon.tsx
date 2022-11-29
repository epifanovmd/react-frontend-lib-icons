import React, { FC, memo } from 'react';
import ShieldCheckSvg from '../svg/shield-check.svg';

export interface IShieldCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldCheckIcon: FC<IShieldCheckIconProps> = memo(props => {
  return <ShieldCheckSvg {...props} />;
});
