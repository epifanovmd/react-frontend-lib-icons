import React, { FC, memo } from 'react';
import LoginSvg from '../svg/login.svg';

export interface ILoginIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LoginIcon: FC<ILoginIconProps> = memo(props => {
  return <LoginSvg {...props} />;
});
