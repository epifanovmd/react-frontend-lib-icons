import React, { FC, memo } from 'react';
import MicrophoneQuestionOutlineSvg from '../svg/microphone-question-outline.svg';

export interface IMicrophoneQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneQuestionOutlineIcon: FC<IMicrophoneQuestionOutlineIconProps> = memo(props => {
  return <MicrophoneQuestionOutlineSvg {...props} />;
});
