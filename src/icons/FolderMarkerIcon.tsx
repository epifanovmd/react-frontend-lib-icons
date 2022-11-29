import React, { FC, memo } from 'react';
import FolderMarkerSvg from '../svg/folder-marker.svg';

export interface IFolderMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMarkerIcon: FC<IFolderMarkerIconProps> = memo(props => {
  return <FolderMarkerSvg {...props} />;
});
