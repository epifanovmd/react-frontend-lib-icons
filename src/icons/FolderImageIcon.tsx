import React, { FC, memo } from 'react';
import FolderImageSvg from '../svg/folder-image.svg';

export interface IFolderImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderImageIcon: FC<IFolderImageIconProps> = memo(props => {
  return <FolderImageSvg {...props} />;
});
