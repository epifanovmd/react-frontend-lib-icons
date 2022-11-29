import React, { FC, memo } from 'react';
import FolderInformationSvg from '../svg/folder-information.svg';

export interface IFolderInformationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderInformationIcon: FC<IFolderInformationIconProps> = memo(props => {
  return <FolderInformationSvg {...props} />;
});
