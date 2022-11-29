import React, { FC, memo } from 'react';
import CreditCardSyncSvg from '../svg/credit-card-sync.svg';

export interface ICreditCardSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardSyncIcon: FC<ICreditCardSyncIconProps> = memo(props => {
  return <CreditCardSyncSvg {...props} />;
});
