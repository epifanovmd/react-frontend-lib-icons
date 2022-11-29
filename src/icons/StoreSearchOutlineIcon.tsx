import React, { FC, memo } from 'react';
import StoreSearchOutlineSvg from '../svg/store-search-outline.svg';

export interface IStoreSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreSearchOutlineIcon: FC<IStoreSearchOutlineIconProps> = memo(props => {
  return <StoreSearchOutlineSvg {...props} />;
});
