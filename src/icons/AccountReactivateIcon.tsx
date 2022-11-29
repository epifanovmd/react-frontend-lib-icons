import React, { FC, memo } from 'react';
import AccountReactivateSvg from '../svg/account-reactivate.svg';

export interface IAccountReactivateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountReactivateIcon: FC<IAccountReactivateIconProps> = memo(props => {
  return <AccountReactivateSvg {...props} />;
});
