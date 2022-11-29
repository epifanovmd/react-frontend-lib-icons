import React, { FC, memo } from 'react';
import FolderEyeSvg from '../svg/folder-eye.svg';

export interface IFolderEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderEyeIcon: FC<IFolderEyeIconProps> = memo(props => {
  return <FolderEyeSvg {...props} />;
});
