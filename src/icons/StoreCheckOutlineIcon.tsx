import React, { FC, memo } from 'react';
import StoreCheckOutlineSvg from '../svg/store-check-outline.svg';

export interface IStoreCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreCheckOutlineIcon: FC<IStoreCheckOutlineIconProps> = memo(props => {
  return <StoreCheckOutlineSvg {...props} />;
});
