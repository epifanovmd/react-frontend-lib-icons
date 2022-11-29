import React, { FC, memo } from 'react';
import FileDocumentMinusOutlineSvg from '../svg/file-document-minus-outline.svg';

export interface IFileDocumentMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentMinusOutlineIcon: FC<IFileDocumentMinusOutlineIconProps> = memo(props => {
  return <FileDocumentMinusOutlineSvg {...props} />;
});
