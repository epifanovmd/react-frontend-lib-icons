import React, { FC, memo } from 'react';
import CreditCardClockOutlineSvg from '../svg/credit-card-clock-outline.svg';

export interface ICreditCardClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardClockOutlineIcon: FC<ICreditCardClockOutlineIconProps> = memo(props => {
  return <CreditCardClockOutlineSvg {...props} />;
});
