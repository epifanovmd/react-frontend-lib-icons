import React, { FC, memo } from 'react';
import FileDocumentArrowRightOutlineSvg from '../svg/file-document-arrow-right-outline.svg';

export interface IFileDocumentArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentArrowRightOutlineIcon: FC<IFileDocumentArrowRightOutlineIconProps> = memo(props => {
  return <FileDocumentArrowRightOutlineSvg {...props} />;
});
