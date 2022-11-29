import React, { FC, memo } from 'react';
import FaceManOutlineSvg from '../svg/face-man-outline.svg';

export interface IFaceManOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceManOutlineIcon: FC<IFaceManOutlineIconProps> = memo(props => {
  return <FaceManOutlineSvg {...props} />;
});
