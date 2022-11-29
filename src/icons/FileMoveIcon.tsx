import React, { FC, memo } from 'react';
import FileMoveSvg from '../svg/file-move.svg';

export interface IFileMoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMoveIcon: FC<IFileMoveIconProps> = memo(props => {
  return <FileMoveSvg {...props} />;
});
