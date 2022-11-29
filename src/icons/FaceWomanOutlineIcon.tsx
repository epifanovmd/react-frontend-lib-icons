import React, { FC, memo } from 'react';
import FaceWomanOutlineSvg from '../svg/face-woman-outline.svg';

export interface IFaceWomanOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceWomanOutlineIcon: FC<IFaceWomanOutlineIconProps> = memo(props => {
  return <FaceWomanOutlineSvg {...props} />;
});
