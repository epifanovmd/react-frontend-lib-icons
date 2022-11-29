import React, { FC, memo } from 'react';
import AccountConvertSvg from '../svg/account-convert.svg';

export interface IAccountConvertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountConvertIcon: FC<IAccountConvertIconProps> = memo(props => {
  return <AccountConvertSvg {...props} />;
});
