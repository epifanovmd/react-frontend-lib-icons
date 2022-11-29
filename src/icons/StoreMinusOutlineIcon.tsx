import React, { FC, memo } from 'react';
import StoreMinusOutlineSvg from '../svg/store-minus-outline.svg';

export interface IStoreMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreMinusOutlineIcon: FC<IStoreMinusOutlineIconProps> = memo(props => {
  return <StoreMinusOutlineSvg {...props} />;
});
