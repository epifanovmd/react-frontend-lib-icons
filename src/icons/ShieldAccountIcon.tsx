import React, { FC, memo } from 'react';
import ShieldAccountSvg from '../svg/shield-account.svg';

export interface IShieldAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldAccountIcon: FC<IShieldAccountIconProps> = memo(props => {
  return <ShieldAccountSvg {...props} />;
});
