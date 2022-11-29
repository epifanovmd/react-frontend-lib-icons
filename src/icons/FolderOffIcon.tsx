import React, { FC, memo } from 'react';
import FolderOffSvg from '../svg/folder-off.svg';

export interface IFolderOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderOffIcon: FC<IFolderOffIconProps> = memo(props => {
  return <FolderOffSvg {...props} />;
});
