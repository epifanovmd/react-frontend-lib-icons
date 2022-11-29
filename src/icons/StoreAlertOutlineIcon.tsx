import React, { FC, memo } from 'react';
import StoreAlertOutlineSvg from '../svg/store-alert-outline.svg';

export interface IStoreAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreAlertOutlineIcon: FC<IStoreAlertOutlineIconProps> = memo(props => {
  return <StoreAlertOutlineSvg {...props} />;
});
