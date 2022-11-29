import React, { FC, memo } from 'react';
import FaceWomanSvg from '../svg/face-woman.svg';

export interface IFaceWomanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceWomanIcon: FC<IFaceWomanIconProps> = memo(props => {
  return <FaceWomanSvg {...props} />;
});
