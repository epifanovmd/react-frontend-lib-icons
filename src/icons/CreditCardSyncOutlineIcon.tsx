import React, { FC, memo } from 'react';
import CreditCardSyncOutlineSvg from '../svg/credit-card-sync-outline.svg';

export interface ICreditCardSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardSyncOutlineIcon: FC<ICreditCardSyncOutlineIconProps> = memo(props => {
  return <CreditCardSyncOutlineSvg {...props} />;
});
