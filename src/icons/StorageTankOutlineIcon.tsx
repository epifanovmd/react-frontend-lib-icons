import React, { FC, memo } from 'react';
import StorageTankOutlineSvg from '../svg/storage-tank-outline.svg';

export interface IStorageTankOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorageTankOutlineIcon: FC<IStorageTankOutlineIconProps> = memo(props => {
  return <StorageTankOutlineSvg {...props} />;
});
