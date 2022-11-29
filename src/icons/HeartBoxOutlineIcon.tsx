import React, { FC, memo } from 'react';
import HeartBoxOutlineSvg from '../svg/heart-box-outline.svg';

export interface IHeartBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartBoxOutlineIcon: FC<IHeartBoxOutlineIconProps> = memo(props => {
  return <HeartBoxOutlineSvg {...props} />;
});
