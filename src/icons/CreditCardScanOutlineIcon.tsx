import React, { FC, memo } from 'react';
import CreditCardScanOutlineSvg from '../svg/credit-card-scan-outline.svg';

export interface ICreditCardScanOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardScanOutlineIcon: FC<ICreditCardScanOutlineIconProps> = memo(props => {
  return <CreditCardScanOutlineSvg {...props} />;
});
