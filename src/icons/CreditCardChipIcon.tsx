import React, { FC, memo } from 'react';
import CreditCardChipSvg from '../svg/credit-card-chip.svg';

export interface ICreditCardChipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardChipIcon: FC<ICreditCardChipIconProps> = memo(props => {
  return <CreditCardChipSvg {...props} />;
});
