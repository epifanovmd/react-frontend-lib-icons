import React, { FC, memo } from 'react';
import FolderMultipleImageSvg from '../svg/folder-multiple-image.svg';

export interface IFolderMultipleImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMultipleImageIcon: FC<IFolderMultipleImageIconProps> = memo(props => {
  return <FolderMultipleImageSvg {...props} />;
});
