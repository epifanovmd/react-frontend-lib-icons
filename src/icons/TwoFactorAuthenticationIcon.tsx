import React, { FC, memo } from 'react';
import TwoFactorAuthenticationSvg from '../svg/two-factor-authentication.svg';

export interface ITwoFactorAuthenticationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TwoFactorAuthenticationIcon: FC<ITwoFactorAuthenticationIconProps> = memo(props => {
  return <TwoFactorAuthenticationSvg {...props} />;
});
