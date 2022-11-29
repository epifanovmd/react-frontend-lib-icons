import React, { FC, memo } from 'react';
import OrderAlphabeticalDescendingSvg from '../svg/order-alphabetical-descending.svg';

export interface IOrderAlphabeticalDescendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrderAlphabeticalDescendingIcon: FC<IOrderAlphabeticalDescendingIconProps> = memo(props => {
  return <OrderAlphabeticalDescendingSvg {...props} />;
});
