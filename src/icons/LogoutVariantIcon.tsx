import React, { FC, memo } from 'react';
import LogoutVariantSvg from '../svg/logout-variant.svg';

export interface ILogoutVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LogoutVariantIcon: FC<ILogoutVariantIconProps> = memo(props => {
  return <LogoutVariantSvg {...props} />;
});
