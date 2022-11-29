import React, { FC, memo } from 'react';
import CreditCardFastOutlineSvg from '../svg/credit-card-fast-outline.svg';

export interface ICreditCardFastOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardFastOutlineIcon: FC<ICreditCardFastOutlineIconProps> = memo(props => {
  return <CreditCardFastOutlineSvg {...props} />;
});
