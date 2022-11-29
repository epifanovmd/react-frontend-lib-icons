import React, { FC, memo } from 'react';
import FolderAccountSvg from '../svg/folder-account.svg';

export interface IFolderAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderAccountIcon: FC<IFolderAccountIconProps> = memo(props => {
  return <FolderAccountSvg {...props} />;
});
