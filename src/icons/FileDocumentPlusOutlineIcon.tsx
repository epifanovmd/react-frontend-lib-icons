import React, { FC, memo } from 'react';
import FileDocumentPlusOutlineSvg from '../svg/file-document-plus-outline.svg';

export interface IFileDocumentPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentPlusOutlineIcon: FC<IFileDocumentPlusOutlineIconProps> = memo(props => {
  return <FileDocumentPlusOutlineSvg {...props} />;
});
