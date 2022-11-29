import React, { FC, memo } from 'react';
import AccountSettingsSvg from '../svg/account-settings.svg';

export interface IAccountSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSettingsIcon: FC<IAccountSettingsIconProps> = memo(props => {
  return <AccountSettingsSvg {...props} />;
});
