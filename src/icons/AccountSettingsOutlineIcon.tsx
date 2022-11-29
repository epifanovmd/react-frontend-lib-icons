import React, { FC, memo } from 'react';
import AccountSettingsOutlineSvg from '../svg/account-settings-outline.svg';

export interface IAccountSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSettingsOutlineIcon: FC<IAccountSettingsOutlineIconProps> = memo(props => {
  return <AccountSettingsOutlineSvg {...props} />;
});
