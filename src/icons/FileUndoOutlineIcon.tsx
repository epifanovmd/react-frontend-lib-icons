import React, { FC, memo } from 'react';
import FileUndoOutlineSvg from '../svg/file-undo-outline.svg';

export interface IFileUndoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileUndoOutlineIcon: FC<IFileUndoOutlineIconProps> = memo(props => {
  return <FileUndoOutlineSvg {...props} />;
});
