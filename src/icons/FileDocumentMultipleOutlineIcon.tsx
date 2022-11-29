import React, { FC, memo } from 'react';
import FileDocumentMultipleOutlineSvg from '../svg/file-document-multiple-outline.svg';

export interface IFileDocumentMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentMultipleOutlineIcon: FC<IFileDocumentMultipleOutlineIconProps> = memo(props => {
  return <FileDocumentMultipleOutlineSvg {...props} />;
});
