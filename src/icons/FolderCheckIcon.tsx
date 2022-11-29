import React, { FC, memo } from 'react';
import FolderCheckSvg from '../svg/folder-check.svg';

export interface IFolderCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderCheckIcon: FC<IFolderCheckIconProps> = memo(props => {
  return <FolderCheckSvg {...props} />;
});
