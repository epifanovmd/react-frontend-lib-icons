import React, { FC, memo } from 'react';
import FolderMinusOutlineSvg from '../svg/folder-minus-outline.svg';

export interface IFolderMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMinusOutlineIcon: FC<IFolderMinusOutlineIconProps> = memo(props => {
  return <FolderMinusOutlineSvg {...props} />;
});
