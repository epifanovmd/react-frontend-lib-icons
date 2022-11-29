import React, { FC, memo } from 'react';
import BeakerQuestionOutlineSvg from '../svg/beaker-question-outline.svg';

export interface IBeakerQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerQuestionOutlineIcon: FC<IBeakerQuestionOutlineIconProps> = memo(props => {
  return <BeakerQuestionOutlineSvg {...props} />;
});
