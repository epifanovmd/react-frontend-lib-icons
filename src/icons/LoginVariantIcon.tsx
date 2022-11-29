import React, { FC, memo } from 'react';
import LoginVariantSvg from '../svg/login-variant.svg';

export interface ILoginVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LoginVariantIcon: FC<ILoginVariantIconProps> = memo(props => {
  return <LoginVariantSvg {...props} />;
});
