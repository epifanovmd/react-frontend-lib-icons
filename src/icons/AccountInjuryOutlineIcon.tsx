import React, { FC, memo } from 'react';
import AccountInjuryOutlineSvg from '../svg/account-injury-outline.svg';

export interface IAccountInjuryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountInjuryOutlineIcon: FC<IAccountInjuryOutlineIconProps> = memo(props => {
  return <AccountInjuryOutlineSvg {...props} />;
});
