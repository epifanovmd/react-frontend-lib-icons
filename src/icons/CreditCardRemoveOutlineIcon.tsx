import React, { FC, memo } from 'react';
import CreditCardRemoveOutlineSvg from '../svg/credit-card-remove-outline.svg';

export interface ICreditCardRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardRemoveOutlineIcon: FC<ICreditCardRemoveOutlineIconProps> = memo(props => {
  return <CreditCardRemoveOutlineSvg {...props} />;
});
