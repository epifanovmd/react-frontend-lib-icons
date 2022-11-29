import React, { FC, memo } from 'react';
import ShieldOffSvg from '../svg/shield-off.svg';

export interface IShieldOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldOffIcon: FC<IShieldOffIconProps> = memo(props => {
  return <ShieldOffSvg {...props} />;
});
