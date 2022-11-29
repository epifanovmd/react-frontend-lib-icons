import React, { FC, memo } from 'react';
import FolderMinusSvg from '../svg/folder-minus.svg';

export interface IFolderMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMinusIcon: FC<IFolderMinusIconProps> = memo(props => {
  return <FolderMinusSvg {...props} />;
});
