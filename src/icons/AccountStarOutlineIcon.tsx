import React, { FC, memo } from 'react';
import AccountStarOutlineSvg from '../svg/account-star-outline.svg';

export interface IAccountStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountStarOutlineIcon: FC<IAccountStarOutlineIconProps> = memo(props => {
  return <AccountStarOutlineSvg {...props} />;
});
