import React, { FC, memo } from 'react';
import FileEditSvg from '../svg/file-edit.svg';

export interface IFileEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileEditIcon: FC<IFileEditIconProps> = memo(props => {
  return <FileEditSvg {...props} />;
});
