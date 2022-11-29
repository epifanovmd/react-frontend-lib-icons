import React, { FC, memo } from 'react';
import CrosshairsQuestionSvg from '../svg/crosshairs-question.svg';

export interface ICrosshairsQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrosshairsQuestionIcon: FC<ICrosshairsQuestionIconProps> = memo(props => {
  return <CrosshairsQuestionSvg {...props} />;
});
