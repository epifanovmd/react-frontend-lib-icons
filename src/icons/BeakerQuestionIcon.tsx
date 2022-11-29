import React, { FC, memo } from 'react';
import BeakerQuestionSvg from '../svg/beaker-question.svg';

export interface IBeakerQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerQuestionIcon: FC<IBeakerQuestionIconProps> = memo(props => {
  return <BeakerQuestionSvg {...props} />;
});
