import React, { FC, memo } from 'react';
import FileMoveOutlineSvg from '../svg/file-move-outline.svg';

export interface IFileMoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMoveOutlineIcon: FC<IFileMoveOutlineIconProps> = memo(props => {
  return <FileMoveOutlineSvg {...props} />;
});
