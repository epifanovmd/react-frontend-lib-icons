import React, { FC, memo } from 'react';
import FolderInformationOutlineSvg from '../svg/folder-information-outline.svg';

export interface IFolderInformationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderInformationOutlineIcon: FC<IFolderInformationOutlineIconProps> = memo(props => {
  return <FolderInformationOutlineSvg {...props} />;
});
