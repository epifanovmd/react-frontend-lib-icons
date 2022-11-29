import React, { FC, memo } from 'react';
import AccountSearchOutlineSvg from '../svg/account-search-outline.svg';

export interface IAccountSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSearchOutlineIcon: FC<IAccountSearchOutlineIconProps> = memo(props => {
  return <AccountSearchOutlineSvg {...props} />;
});
