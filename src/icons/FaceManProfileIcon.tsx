import React, { FC, memo } from 'react';
import FaceManProfileSvg from '../svg/face-man-profile.svg';

export interface IFaceManProfileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceManProfileIcon: FC<IFaceManProfileIconProps> = memo(props => {
  return <FaceManProfileSvg {...props} />;
});
