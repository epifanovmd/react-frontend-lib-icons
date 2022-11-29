import React, { FC, memo } from 'react';
import StoreSearchSvg from '../svg/store-search.svg';

export interface IStoreSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreSearchIcon: FC<IStoreSearchIconProps> = memo(props => {
  return <StoreSearchSvg {...props} />;
});
