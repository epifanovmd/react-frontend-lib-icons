import React, { FC, memo } from 'react';
import TranscribeSvg from '../svg/transcribe.svg';

export interface ITranscribeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TranscribeIcon: FC<ITranscribeIconProps> = memo(props => {
  return <TranscribeSvg {...props} />;
});
