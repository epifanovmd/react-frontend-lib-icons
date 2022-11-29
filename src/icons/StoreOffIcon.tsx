import React, { FC, memo } from 'react';
import StoreOffSvg from '../svg/store-off.svg';

export interface IStoreOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreOffIcon: FC<IStoreOffIconProps> = memo(props => {
  return <StoreOffSvg {...props} />;
});
