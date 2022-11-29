import React, { FC, memo } from 'react';
import AccountRemoveOutlineSvg from '../svg/account-remove-outline.svg';

export interface IAccountRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountRemoveOutlineIcon: FC<IAccountRemoveOutlineIconProps> = memo(props => {
  return <AccountRemoveOutlineSvg {...props} />;
});
