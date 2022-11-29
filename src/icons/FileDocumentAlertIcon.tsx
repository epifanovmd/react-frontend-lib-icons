import React, { FC, memo } from 'react';
import FileDocumentAlertSvg from '../svg/file-document-alert.svg';

export interface IFileDocumentAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentAlertIcon: FC<IFileDocumentAlertIconProps> = memo(props => {
  return <FileDocumentAlertSvg {...props} />;
});
