import React, { FC, memo } from 'react';
import OrderAlphabeticalAscendingSvg from '../svg/order-alphabetical-ascending.svg';

export interface IOrderAlphabeticalAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrderAlphabeticalAscendingIcon: FC<IOrderAlphabeticalAscendingIconProps> = memo(props => {
  return <OrderAlphabeticalAscendingSvg {...props} />;
});
