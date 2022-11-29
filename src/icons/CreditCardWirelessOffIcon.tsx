import React, { FC, memo } from 'react';
import CreditCardWirelessOffSvg from '../svg/credit-card-wireless-off.svg';

export interface ICreditCardWirelessOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardWirelessOffIcon: FC<ICreditCardWirelessOffIconProps> = memo(props => {
  return <CreditCardWirelessOffSvg {...props} />;
});
