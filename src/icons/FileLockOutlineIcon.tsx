import React, { FC, memo } from 'react';
import FileLockOutlineSvg from '../svg/file-lock-outline.svg';

export interface IFileLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileLockOutlineIcon: FC<IFileLockOutlineIconProps> = memo(props => {
  return <FileLockOutlineSvg {...props} />;
});
