import React, { FC, memo } from 'react';
import StoreClockSvg from '../svg/store-clock.svg';

export interface IStoreClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreClockIcon: FC<IStoreClockIconProps> = memo(props => {
  return <StoreClockSvg {...props} />;
});
