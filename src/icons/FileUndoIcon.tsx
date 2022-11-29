import React, { FC, memo } from 'react';
import FileUndoSvg from '../svg/file-undo.svg';

export interface IFileUndoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileUndoIcon: FC<IFileUndoIconProps> = memo(props => {
  return <FileUndoSvg {...props} />;
});
