import React, { FC, memo } from 'react';
import StorageTankSvg from '../svg/storage-tank.svg';

export interface IStorageTankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorageTankIcon: FC<IStorageTankIconProps> = memo(props => {
  return <StorageTankSvg {...props} />;
});
