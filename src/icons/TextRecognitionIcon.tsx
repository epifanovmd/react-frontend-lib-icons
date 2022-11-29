import React, { FC, memo } from 'react';
import TextRecognitionSvg from '../svg/text-recognition.svg';

export interface ITextRecognitionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextRecognitionIcon: FC<ITextRecognitionIconProps> = memo(props => {
  return <TextRecognitionSvg {...props} />;
});
