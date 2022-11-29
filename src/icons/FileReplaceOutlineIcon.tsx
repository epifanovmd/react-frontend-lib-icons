import React, { FC, memo } from 'react';
import FileReplaceOutlineSvg from '../svg/file-replace-outline.svg';

export interface IFileReplaceOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileReplaceOutlineIcon: FC<IFileReplaceOutlineIconProps> = memo(props => {
  return <FileReplaceOutlineSvg {...props} />;
});
