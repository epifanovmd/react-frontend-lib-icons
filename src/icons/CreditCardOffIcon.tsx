import React, { FC, memo } from 'react';
import CreditCardOffSvg from '../svg/credit-card-off.svg';

export interface ICreditCardOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardOffIcon: FC<ICreditCardOffIconProps> = memo(props => {
  return <CreditCardOffSvg {...props} />;
});
