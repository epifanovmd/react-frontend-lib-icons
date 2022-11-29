import React, { FC, memo } from 'react';
import FileDocumentCheckOutlineSvg from '../svg/file-document-check-outline.svg';

export interface IFileDocumentCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentCheckOutlineIcon: FC<IFileDocumentCheckOutlineIconProps> = memo(props => {
  return <FileDocumentCheckOutlineSvg {...props} />;
});
