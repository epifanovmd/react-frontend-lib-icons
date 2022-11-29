import React, { FC, memo } from 'react';
import FolderCheckOutlineSvg from '../svg/folder-check-outline.svg';

export interface IFolderCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderCheckOutlineIcon: FC<IFolderCheckOutlineIconProps> = memo(props => {
  return <FolderCheckOutlineSvg {...props} />;
});
