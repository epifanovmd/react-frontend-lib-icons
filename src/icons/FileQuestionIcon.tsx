import React, { FC, memo } from 'react';
import FileQuestionSvg from '../svg/file-question.svg';

export interface IFileQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileQuestionIcon: FC<IFileQuestionIconProps> = memo(props => {
  return <FileQuestionSvg {...props} />;
});
