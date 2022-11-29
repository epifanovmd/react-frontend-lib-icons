import React, { FC, memo } from 'react';
import AccountMultipleMinusOutlineSvg from '../svg/account-multiple-minus-outline.svg';

export interface IAccountMultipleMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultipleMinusOutlineIcon: FC<IAccountMultipleMinusOutlineIconProps> = memo(props => {
  return <AccountMultipleMinusOutlineSvg {...props} />;
});
