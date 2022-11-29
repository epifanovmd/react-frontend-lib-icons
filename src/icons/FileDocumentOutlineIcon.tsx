import React, { FC, memo } from 'react';
import FileDocumentOutlineSvg from '../svg/file-document-outline.svg';

export interface IFileDocumentOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentOutlineIcon: FC<IFileDocumentOutlineIconProps> = memo(props => {
  return <FileDocumentOutlineSvg {...props} />;
});
