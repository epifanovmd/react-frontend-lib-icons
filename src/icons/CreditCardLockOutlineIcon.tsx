import React, { FC, memo } from 'react';
import CreditCardLockOutlineSvg from '../svg/credit-card-lock-outline.svg';

export interface ICreditCardLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardLockOutlineIcon: FC<ICreditCardLockOutlineIconProps> = memo(props => {
  return <CreditCardLockOutlineSvg {...props} />;
});
