import React, { FC, memo } from 'react';
import StoreRemoveOutlineSvg from '../svg/store-remove-outline.svg';

export interface IStoreRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreRemoveOutlineIcon: FC<IStoreRemoveOutlineIconProps> = memo(props => {
  return <StoreRemoveOutlineSvg {...props} />;
});
