import React, { FC, memo } from 'react';
import CreditCardRefreshSvg from '../svg/credit-card-refresh.svg';

export interface ICreditCardRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardRefreshIcon: FC<ICreditCardRefreshIconProps> = memo(props => {
  return <CreditCardRefreshSvg {...props} />;
});
