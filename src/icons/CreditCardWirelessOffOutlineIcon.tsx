import React, { FC, memo } from 'react';
import CreditCardWirelessOffOutlineSvg from '../svg/credit-card-wireless-off-outline.svg';

export interface ICreditCardWirelessOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardWirelessOffOutlineIcon: FC<ICreditCardWirelessOffOutlineIconProps> = memo(props => {
  return <CreditCardWirelessOffOutlineSvg {...props} />;
});
