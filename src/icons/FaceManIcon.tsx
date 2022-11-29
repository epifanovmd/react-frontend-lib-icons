import React, { FC, memo } from 'react';
import FaceManSvg from '../svg/face-man.svg';

export interface IFaceManIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceManIcon: FC<IFaceManIconProps> = memo(props => {
  return <FaceManSvg {...props} />;
});
