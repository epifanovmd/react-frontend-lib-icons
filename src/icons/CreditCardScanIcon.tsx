import React, { FC, memo } from 'react';
import CreditCardScanSvg from '../svg/credit-card-scan.svg';

export interface ICreditCardScanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardScanIcon: FC<ICreditCardScanIconProps> = memo(props => {
  return <CreditCardScanSvg {...props} />;
});
