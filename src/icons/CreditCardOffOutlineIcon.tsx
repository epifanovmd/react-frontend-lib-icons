import React, { FC, memo } from 'react';
import CreditCardOffOutlineSvg from '../svg/credit-card-off-outline.svg';

export interface ICreditCardOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardOffOutlineIcon: FC<ICreditCardOffOutlineIconProps> = memo(props => {
  return <CreditCardOffOutlineSvg {...props} />;
});
