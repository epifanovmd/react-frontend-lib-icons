import React, { FC, memo } from 'react';
import AccountMinusOutlineSvg from '../svg/account-minus-outline.svg';

export interface IAccountMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMinusOutlineIcon: FC<IAccountMinusOutlineIconProps> = memo(props => {
  return <AccountMinusOutlineSvg {...props} />;
});
