import React, { FC, memo } from 'react';
import HeartHalfOutlineSvg from '../svg/heart-half-outline.svg';

export interface IHeartHalfOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartHalfOutlineIcon: FC<IHeartHalfOutlineIconProps> = memo(props => {
  return <HeartHalfOutlineSvg {...props} />;
});
