import React, { FC, memo } from 'react';
import FileDocumentCheckSvg from '../svg/file-document-check.svg';

export interface IFileDocumentCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentCheckIcon: FC<IFileDocumentCheckIconProps> = memo(props => {
  return <FileDocumentCheckSvg {...props} />;
});
