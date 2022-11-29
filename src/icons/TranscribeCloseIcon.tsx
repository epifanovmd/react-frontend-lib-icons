import React, { FC, memo } from 'react';
import TranscribeCloseSvg from '../svg/transcribe-close.svg';

export interface ITranscribeCloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TranscribeCloseIcon: FC<ITranscribeCloseIconProps> = memo(props => {
  return <TranscribeCloseSvg {...props} />;
});
