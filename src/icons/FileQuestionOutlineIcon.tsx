import React, { FC, memo } from 'react';
import FileQuestionOutlineSvg from '../svg/file-question-outline.svg';

export interface IFileQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileQuestionOutlineIcon: FC<IFileQuestionOutlineIconProps> = memo(props => {
  return <FileQuestionOutlineSvg {...props} />;
});
