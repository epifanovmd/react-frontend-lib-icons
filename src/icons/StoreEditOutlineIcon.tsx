import React, { FC, memo } from 'react';
import StoreEditOutlineSvg from '../svg/store-edit-outline.svg';

export interface IStoreEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreEditOutlineIcon: FC<IStoreEditOutlineIconProps> = memo(props => {
  return <StoreEditOutlineSvg {...props} />;
});
