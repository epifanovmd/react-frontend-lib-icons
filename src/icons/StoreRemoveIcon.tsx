import React, { FC, memo } from 'react';
import StoreRemoveSvg from '../svg/store-remove.svg';

export interface IStoreRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreRemoveIcon: FC<IStoreRemoveIconProps> = memo(props => {
  return <StoreRemoveSvg {...props} />;
});
