import React, { FC, memo } from 'react';
import CreditCardMultipleOutlineSvg from '../svg/credit-card-multiple-outline.svg';

export interface ICreditCardMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardMultipleOutlineIcon: FC<ICreditCardMultipleOutlineIconProps> = memo(props => {
  return <CreditCardMultipleOutlineSvg {...props} />;
});
