import React, { FC, memo } from 'react';
import FileRestoreOutlineSvg from '../svg/file-restore-outline.svg';

export interface IFileRestoreOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRestoreOutlineIcon: FC<IFileRestoreOutlineIconProps> = memo(props => {
  return <FileRestoreOutlineSvg {...props} />;
});
