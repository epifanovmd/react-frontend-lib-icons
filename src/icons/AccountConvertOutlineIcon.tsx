import React, { FC, memo } from 'react';
import AccountConvertOutlineSvg from '../svg/account-convert-outline.svg';

export interface IAccountConvertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountConvertOutlineIcon: FC<IAccountConvertOutlineIconProps> = memo(props => {
  return <AccountConvertOutlineSvg {...props} />;
});
