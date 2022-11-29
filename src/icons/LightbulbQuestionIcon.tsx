import React, { FC, memo } from 'react';
import LightbulbQuestionSvg from '../svg/lightbulb-question.svg';

export interface ILightbulbQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbQuestionIcon: FC<ILightbulbQuestionIconProps> = memo(props => {
  return <LightbulbQuestionSvg {...props} />;
});
