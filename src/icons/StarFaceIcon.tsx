import React, { FC, memo } from 'react';
import StarFaceSvg from '../svg/star-face.svg';

export interface IStarFaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarFaceIcon: FC<IStarFaceIconProps> = memo(props => {
  return <StarFaceSvg {...props} />;
});
