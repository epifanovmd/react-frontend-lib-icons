import React, { FC, memo } from 'react';
import CreditCardWirelessSvg from '../svg/credit-card-wireless.svg';

export interface ICreditCardWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardWirelessIcon: FC<ICreditCardWirelessIconProps> = memo(props => {
  return <CreditCardWirelessSvg {...props} />;
});
