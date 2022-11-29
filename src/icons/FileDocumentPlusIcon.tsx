import React, { FC, memo } from 'react';
import FileDocumentPlusSvg from '../svg/file-document-plus.svg';

export interface IFileDocumentPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentPlusIcon: FC<IFileDocumentPlusIconProps> = memo(props => {
  return <FileDocumentPlusSvg {...props} />;
});
