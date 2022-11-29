import React, { FC, memo } from 'react';
import LightbulbQuestionOutlineSvg from '../svg/lightbulb-question-outline.svg';

export interface ILightbulbQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbQuestionOutlineIcon: FC<ILightbulbQuestionOutlineIconProps> = memo(props => {
  return <LightbulbQuestionOutlineSvg {...props} />;
});
