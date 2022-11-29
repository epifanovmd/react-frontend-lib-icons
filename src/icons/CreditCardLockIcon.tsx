import React, { FC, memo } from 'react';
import CreditCardLockSvg from '../svg/credit-card-lock.svg';

export interface ICreditCardLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardLockIcon: FC<ICreditCardLockIconProps> = memo(props => {
  return <CreditCardLockSvg {...props} />;
});
