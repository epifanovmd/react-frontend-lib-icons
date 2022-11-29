import React, { FC, memo } from 'react';
import HeartMinusOutlineSvg from '../svg/heart-minus-outline.svg';

export interface IHeartMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartMinusOutlineIcon: FC<IHeartMinusOutlineIconProps> = memo(props => {
  return <HeartMinusOutlineSvg {...props} />;
});
