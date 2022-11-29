import React, { FC, memo } from 'react';
import CreditCardCheckSvg from '../svg/credit-card-check.svg';

export interface ICreditCardCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardCheckIcon: FC<ICreditCardCheckIconProps> = memo(props => {
  return <CreditCardCheckSvg {...props} />;
});
