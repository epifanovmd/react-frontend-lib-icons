import React, { FC, memo } from 'react';
import FrequentlyAskedQuestionsSvg from '../svg/frequently-asked-questions.svg';

export interface IFrequentlyAskedQuestionsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FrequentlyAskedQuestionsIcon: FC<IFrequentlyAskedQuestionsIconProps> = memo(props => {
  return <FrequentlyAskedQuestionsSvg {...props} />;
});
