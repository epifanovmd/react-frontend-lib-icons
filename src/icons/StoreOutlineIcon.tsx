import React, { FC, memo } from 'react';
import StoreOutlineSvg from '../svg/store-outline.svg';

export interface IStoreOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreOutlineIcon: FC<IStoreOutlineIconProps> = memo(props => {
  return <StoreOutlineSvg {...props} />;
});
