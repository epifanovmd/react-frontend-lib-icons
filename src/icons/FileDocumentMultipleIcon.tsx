import React, { FC, memo } from 'react';
import FileDocumentMultipleSvg from '../svg/file-document-multiple.svg';

export interface IFileDocumentMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentMultipleIcon: FC<IFileDocumentMultipleIconProps> = memo(props => {
  return <FileDocumentMultipleSvg {...props} />;
});
