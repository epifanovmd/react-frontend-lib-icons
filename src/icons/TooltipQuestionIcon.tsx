import React, { FC, memo } from 'react';
import TooltipQuestionSvg from '../svg/tooltip-question.svg';

export interface ITooltipQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipQuestionIcon: FC<ITooltipQuestionIconProps> = memo(props => {
  return <TooltipQuestionSvg {...props} />;
});
