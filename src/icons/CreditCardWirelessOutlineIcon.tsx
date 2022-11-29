import React, { FC, memo } from 'react';
import CreditCardWirelessOutlineSvg from '../svg/credit-card-wireless-outline.svg';

export interface ICreditCardWirelessOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardWirelessOutlineIcon: FC<ICreditCardWirelessOutlineIconProps> = memo(props => {
  return <CreditCardWirelessOutlineSvg {...props} />;
});
