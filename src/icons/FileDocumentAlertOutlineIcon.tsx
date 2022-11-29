import React, { FC, memo } from 'react';
import FileDocumentAlertOutlineSvg from '../svg/file-document-alert-outline.svg';

export interface IFileDocumentAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentAlertOutlineIcon: FC<IFileDocumentAlertOutlineIconProps> = memo(props => {
  return <FileDocumentAlertOutlineSvg {...props} />;
});
