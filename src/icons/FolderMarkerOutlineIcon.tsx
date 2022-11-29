import React, { FC, memo } from 'react';
import FolderMarkerOutlineSvg from '../svg/folder-marker-outline.svg';

export interface IFolderMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMarkerOutlineIcon: FC<IFolderMarkerOutlineIconProps> = memo(props => {
  return <FolderMarkerOutlineSvg {...props} />;
});
