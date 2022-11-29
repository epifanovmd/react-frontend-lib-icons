import React, { FC, memo } from 'react';
import FolderClockOutlineSvg from '../svg/folder-clock-outline.svg';

export interface IFolderClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderClockOutlineIcon: FC<IFolderClockOutlineIconProps> = memo(props => {
  return <FolderClockOutlineSvg {...props} />;
});
