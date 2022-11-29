import React, { FC, memo } from 'react';
import MicrophoneQuestionSvg from '../svg/microphone-question.svg';

export interface IMicrophoneQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneQuestionIcon: FC<IMicrophoneQuestionIconProps> = memo(props => {
  return <MicrophoneQuestionSvg {...props} />;
});
