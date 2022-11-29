import React, { FC, memo } from 'react';
import AccountEditOutlineSvg from '../svg/account-edit-outline.svg';

export interface IAccountEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountEditOutlineIcon: FC<IAccountEditOutlineIconProps> = memo(props => {
  return <AccountEditOutlineSvg {...props} />;
});
