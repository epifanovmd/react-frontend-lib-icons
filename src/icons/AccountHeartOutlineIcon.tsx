import React, { FC, memo } from 'react';
import AccountHeartOutlineSvg from '../svg/account-heart-outline.svg';

export interface IAccountHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountHeartOutlineIcon: FC<IAccountHeartOutlineIconProps> = memo(props => {
  return <AccountHeartOutlineSvg {...props} />;
});
