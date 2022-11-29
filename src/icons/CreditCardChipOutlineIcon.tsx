import React, { FC, memo } from 'react';
import CreditCardChipOutlineSvg from '../svg/credit-card-chip-outline.svg';

export interface ICreditCardChipOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardChipOutlineIcon: FC<ICreditCardChipOutlineIconProps> = memo(props => {
  return <CreditCardChipOutlineSvg {...props} />;
});
