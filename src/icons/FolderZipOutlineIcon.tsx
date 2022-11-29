import React, { FC, memo } from 'react';
import FolderZipOutlineSvg from '../svg/folder-zip-outline.svg';

export interface IFolderZipOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderZipOutlineIcon: FC<IFolderZipOutlineIconProps> = memo(props => {
  return <FolderZipOutlineSvg {...props} />;
});
