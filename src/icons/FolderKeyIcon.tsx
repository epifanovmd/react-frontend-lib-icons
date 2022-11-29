import React, { FC, memo } from 'react';
import FolderKeySvg from '../svg/folder-key.svg';

export interface IFolderKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderKeyIcon: FC<IFolderKeyIconProps> = memo(props => {
  return <FolderKeySvg {...props} />;
});
