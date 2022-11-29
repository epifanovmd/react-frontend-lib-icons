import React, { FC, memo } from 'react';
import CreditCardOutlineSvg from '../svg/credit-card-outline.svg';

export interface ICreditCardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardOutlineIcon: FC<ICreditCardOutlineIconProps> = memo(props => {
  return <CreditCardOutlineSvg {...props} />;
});
