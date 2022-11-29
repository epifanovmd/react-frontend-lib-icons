import React, { FC, memo } from 'react';
import StoreOffOutlineSvg from '../svg/store-off-outline.svg';

export interface IStoreOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreOffOutlineIcon: FC<IStoreOffOutlineIconProps> = memo(props => {
  return <StoreOffOutlineSvg {...props} />;
});
