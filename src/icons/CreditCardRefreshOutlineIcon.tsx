import React, { FC, memo } from 'react';
import CreditCardRefreshOutlineSvg from '../svg/credit-card-refresh-outline.svg';

export interface ICreditCardRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardRefreshOutlineIcon: FC<ICreditCardRefreshOutlineIconProps> = memo(props => {
  return <CreditCardRefreshOutlineSvg {...props} />;
});
