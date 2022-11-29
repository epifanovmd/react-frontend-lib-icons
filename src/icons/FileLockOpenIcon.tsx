import React, { FC, memo } from 'react';
import FileLockOpenSvg from '../svg/file-lock-open.svg';

export interface IFileLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileLockOpenIcon: FC<IFileLockOpenIconProps> = memo(props => {
  return <FileLockOpenSvg {...props} />;
});
