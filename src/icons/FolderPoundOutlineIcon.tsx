import React, { FC, memo } from 'react';
import FolderPoundOutlineSvg from '../svg/folder-pound-outline.svg';

export interface IFolderPoundOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderPoundOutlineIcon: FC<IFolderPoundOutlineIconProps> = memo(props => {
  return <FolderPoundOutlineSvg {...props} />;
});
