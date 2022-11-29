import React, { FC, memo } from 'react';
import BabyFaceOutlineSvg from '../svg/baby-face-outline.svg';

export interface IBabyFaceOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyFaceOutlineIcon: FC<IBabyFaceOutlineIconProps> = memo(props => {
  return <BabyFaceOutlineSvg {...props} />;
});
