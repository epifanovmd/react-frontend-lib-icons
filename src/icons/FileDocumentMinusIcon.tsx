import React, { FC, memo } from 'react';
import FileDocumentMinusSvg from '../svg/file-document-minus.svg';

export interface IFileDocumentMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentMinusIcon: FC<IFileDocumentMinusIconProps> = memo(props => {
  return <FileDocumentMinusSvg {...props} />;
});
