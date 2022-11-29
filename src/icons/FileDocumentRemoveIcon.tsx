import React, { FC, memo } from 'react';
import FileDocumentRemoveSvg from '../svg/file-document-remove.svg';

export interface IFileDocumentRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentRemoveIcon: FC<IFileDocumentRemoveIconProps> = memo(props => {
  return <FileDocumentRemoveSvg {...props} />;
});
