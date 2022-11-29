import React, { FC, memo } from 'react';
import FaceWomanProfileSvg from '../svg/face-woman-profile.svg';

export interface IFaceWomanProfileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceWomanProfileIcon: FC<IFaceWomanProfileIconProps> = memo(props => {
  return <FaceWomanProfileSvg {...props} />;
});
