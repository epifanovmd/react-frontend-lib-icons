import React, { FC, memo } from 'react';
import StoreSvg from '../svg/store.svg';

export interface IStoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreIcon: FC<IStoreIconProps> = memo(props => {
  return <StoreSvg {...props} />;
});
