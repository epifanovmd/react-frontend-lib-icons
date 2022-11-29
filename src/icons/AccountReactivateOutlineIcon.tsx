import React, { FC, memo } from 'react';
import AccountReactivateOutlineSvg from '../svg/account-reactivate-outline.svg';

export interface IAccountReactivateOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountReactivateOutlineIcon: FC<IAccountReactivateOutlineIconProps> = memo(props => {
  return <AccountReactivateOutlineSvg {...props} />;
});
