import React, { FC, memo } from 'react';
import AccountTagOutlineSvg from '../svg/account-tag-outline.svg';

export interface IAccountTagOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTagOutlineIcon: FC<IAccountTagOutlineIconProps> = memo(props => {
  return <AccountTagOutlineSvg {...props} />;
});
