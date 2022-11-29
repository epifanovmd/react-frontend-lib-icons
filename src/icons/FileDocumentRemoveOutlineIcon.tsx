import React, { FC, memo } from 'react';
import FileDocumentRemoveOutlineSvg from '../svg/file-document-remove-outline.svg';

export interface IFileDocumentRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentRemoveOutlineIcon: FC<IFileDocumentRemoveOutlineIconProps> = memo(props => {
  return <FileDocumentRemoveOutlineSvg {...props} />;
});
