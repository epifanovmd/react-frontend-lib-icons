import React, { FC, memo } from 'react';
import FileLockOpenOutlineSvg from '../svg/file-lock-open-outline.svg';

export interface IFileLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileLockOpenOutlineIcon: FC<IFileLockOpenOutlineIconProps> = memo(props => {
  return <FileLockOpenOutlineSvg {...props} />;
});
