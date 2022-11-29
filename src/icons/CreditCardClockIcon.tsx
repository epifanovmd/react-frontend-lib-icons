import React, { FC, memo } from 'react';
import CreditCardClockSvg from '../svg/credit-card-clock.svg';

export interface ICreditCardClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardClockIcon: FC<ICreditCardClockIconProps> = memo(props => {
  return <CreditCardClockSvg {...props} />;
});
