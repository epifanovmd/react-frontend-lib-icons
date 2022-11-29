import React, { FC, memo } from 'react';
import FileDocumentSvg from '../svg/file-document.svg';

export interface IFileDocumentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentIcon: FC<IFileDocumentIconProps> = memo(props => {
  return <FileDocumentSvg {...props} />;
});
