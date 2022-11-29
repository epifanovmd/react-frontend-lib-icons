import React, { FC, memo } from 'react';
import FileLockSvg from '../svg/file-lock.svg';

export interface IFileLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileLockIcon: FC<IFileLockIconProps> = memo(props => {
  return <FileLockSvg {...props} />;
});
