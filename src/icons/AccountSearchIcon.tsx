import React, { FC, memo } from 'react';
import AccountSearchSvg from '../svg/account-search.svg';

export interface IAccountSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSearchIcon: FC<IAccountSearchIconProps> = memo(props => {
  return <AccountSearchSvg {...props} />;
});
