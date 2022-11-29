import React, { FC, memo } from 'react';
import LogoutSvg from '../svg/logout.svg';

export interface ILogoutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LogoutIcon: FC<ILogoutIconProps> = memo(props => {
  return <LogoutSvg {...props} />;
});
