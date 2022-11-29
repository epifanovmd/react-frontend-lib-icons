import React, { FC, memo } from 'react';
import BabyFaceSvg from '../svg/baby-face.svg';

export interface IBabyFaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyFaceIcon: FC<IBabyFaceIconProps> = memo(props => {
  return <BabyFaceSvg {...props} />;
});
