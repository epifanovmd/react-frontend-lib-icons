import React, { FC, memo } from 'react';
import StoreMinusSvg from '../svg/store-minus.svg';

export interface IStoreMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreMinusIcon: FC<IStoreMinusIconProps> = memo(props => {
  return <StoreMinusSvg {...props} />;
});
