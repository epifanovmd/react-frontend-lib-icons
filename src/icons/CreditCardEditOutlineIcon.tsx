import React, { FC, memo } from 'react';
import CreditCardEditOutlineSvg from '../svg/credit-card-edit-outline.svg';

export interface ICreditCardEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardEditOutlineIcon: FC<ICreditCardEditOutlineIconProps> = memo(props => {
  return <CreditCardEditOutlineSvg {...props} />;
});
