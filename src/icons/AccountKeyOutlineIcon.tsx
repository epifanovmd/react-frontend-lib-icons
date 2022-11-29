import React, { FC, memo } from 'react';
import AccountKeyOutlineSvg from '../svg/account-key-outline.svg';

export interface IAccountKeyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountKeyOutlineIcon: FC<IAccountKeyOutlineIconProps> = memo(props => {
  return <AccountKeyOutlineSvg {...props} />;
});
