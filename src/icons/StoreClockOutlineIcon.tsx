import React, { FC, memo } from 'react';
import StoreClockOutlineSvg from '../svg/store-clock-outline.svg';

export interface IStoreClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreClockOutlineIcon: FC<IStoreClockOutlineIconProps> = memo(props => {
  return <StoreClockOutlineSvg {...props} />;
});
