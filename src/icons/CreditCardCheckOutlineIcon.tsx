import React, { FC, memo } from 'react';
import CreditCardCheckOutlineSvg from '../svg/credit-card-check-outline.svg';

export interface ICreditCardCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardCheckOutlineIcon: FC<ICreditCardCheckOutlineIconProps> = memo(props => {
  return <CreditCardCheckOutlineSvg {...props} />;
});
