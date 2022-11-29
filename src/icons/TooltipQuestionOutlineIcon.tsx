import React, { FC, memo } from 'react';
import TooltipQuestionOutlineSvg from '../svg/tooltip-question-outline.svg';

export interface ITooltipQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TooltipQuestionOutlineIcon: FC<ITooltipQuestionOutlineIconProps> = memo(props => {
  return <TooltipQuestionOutlineSvg {...props} />;
});
