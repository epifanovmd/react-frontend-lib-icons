import React, { FC, memo } from 'react';
import FolderClockSvg from '../svg/folder-clock.svg';

export interface IFolderClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderClockIcon: FC<IFolderClockIconProps> = memo(props => {
  return <FolderClockSvg {...props} />;
});
