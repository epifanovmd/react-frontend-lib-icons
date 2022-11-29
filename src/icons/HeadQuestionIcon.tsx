import React, { FC, memo } from 'react';
import HeadQuestionSvg from '../svg/head-question.svg';

export interface IHeadQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadQuestionIcon: FC<IHeadQuestionIconProps> = memo(props => {
  return <HeadQuestionSvg {...props} />;
});
