import React, { FC, memo } from 'react';
import HeadQuestionOutlineSvg from '../svg/head-question-outline.svg';

export interface IHeadQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadQuestionOutlineIcon: FC<IHeadQuestionOutlineIconProps> = memo(props => {
  return <HeadQuestionOutlineSvg {...props} />;
});
