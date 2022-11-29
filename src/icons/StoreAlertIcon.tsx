import React, { FC, memo } from 'react';
import StoreAlertSvg from '../svg/store-alert.svg';

export interface IStoreAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreAlertIcon: FC<IStoreAlertIconProps> = memo(props => {
  return <StoreAlertSvg {...props} />;
});
