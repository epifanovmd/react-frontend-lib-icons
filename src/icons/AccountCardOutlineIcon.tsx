import React, { FC, memo } from 'react';
import AccountCardOutlineSvg from '../svg/account-card-outline.svg';

export interface IAccountCardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCardOutlineIcon: FC<IAccountCardOutlineIconProps> = memo(props => {
  return <AccountCardOutlineSvg {...props} />;
});
