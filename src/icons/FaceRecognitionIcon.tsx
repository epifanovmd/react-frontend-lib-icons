import React, { FC, memo } from 'react';
import FaceRecognitionSvg from '../svg/face-recognition.svg';

export interface IFaceRecognitionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceRecognitionIcon: FC<IFaceRecognitionIconProps> = memo(props => {
  return <FaceRecognitionSvg {...props} />;
});
