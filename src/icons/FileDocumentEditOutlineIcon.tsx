import React, { FC, memo } from 'react';
import FileDocumentEditOutlineSvg from '../svg/file-document-edit-outline.svg';

export interface IFileDocumentEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentEditOutlineIcon: FC<IFileDocumentEditOutlineIconProps> = memo(props => {
  return <FileDocumentEditOutlineSvg {...props} />;
});
