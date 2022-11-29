import React, { FC, memo } from 'react';
import FolderOpenOutlineSvg from '../svg/folder-open-outline.svg';

export interface IFolderOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderOpenOutlineIcon: FC<IFolderOpenOutlineIconProps> = memo(props => {
  return <FolderOpenOutlineSvg {...props} />;
});
