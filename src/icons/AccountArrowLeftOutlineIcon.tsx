import React, { FC, memo } from 'react';
import AccountArrowLeftOutlineSvg from '../svg/account-arrow-left-outline.svg';

export interface IAccountArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountArrowLeftOutlineIcon: FC<IAccountArrowLeftOutlineIconProps> = memo(props => {
  return <AccountArrowLeftOutlineSvg {...props} />;
});
