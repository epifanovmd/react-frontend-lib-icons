import React, { FC, memo } from 'react';
import FolderPlaySvg from '../svg/folder-play.svg';

export interface IFolderPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderPlayIcon: FC<IFolderPlayIconProps> = memo(props => {
  return <FolderPlaySvg {...props} />;
});
