import React, { FC, memo } from 'react';
import ProgressQuestionSvg from '../svg/progress-question.svg';

export interface IProgressQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressQuestionIcon: FC<IProgressQuestionIconProps> = memo(props => {
  return <ProgressQuestionSvg {...props} />;
});
