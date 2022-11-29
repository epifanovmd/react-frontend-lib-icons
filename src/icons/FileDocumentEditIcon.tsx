import React, { FC, memo } from 'react';
import FileDocumentEditSvg from '../svg/file-document-edit.svg';

export interface IFileDocumentEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentEditIcon: FC<IFileDocumentEditIconProps> = memo(props => {
  return <FileDocumentEditSvg {...props} />;
});
