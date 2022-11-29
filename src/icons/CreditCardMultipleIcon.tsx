import React, { FC, memo } from 'react';
import CreditCardMultipleSvg from '../svg/credit-card-multiple.svg';

export interface ICreditCardMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardMultipleIcon: FC<ICreditCardMultipleIconProps> = memo(props => {
  return <CreditCardMultipleSvg {...props} />;
});
