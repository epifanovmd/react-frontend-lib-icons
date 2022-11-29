import React, { FC, memo } from 'react';
import StoreEditSvg from '../svg/store-edit.svg';

export interface IStoreEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreEditIcon: FC<IStoreEditIconProps> = memo(props => {
  return <StoreEditSvg {...props} />;
});
