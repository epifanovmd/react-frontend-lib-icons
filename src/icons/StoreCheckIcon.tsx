import React, { FC, memo } from 'react';
import StoreCheckSvg from '../svg/store-check.svg';

export interface IStoreCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreCheckIcon: FC<IStoreCheckIconProps> = memo(props => {
  return <StoreCheckSvg {...props} />;
});
