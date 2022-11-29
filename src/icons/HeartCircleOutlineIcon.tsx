import React, { FC, memo } from 'react';
import HeartCircleOutlineSvg from '../svg/heart-circle-outline.svg';

export interface IHeartCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartCircleOutlineIcon: FC<IHeartCircleOutlineIconProps> = memo(props => {
  return <HeartCircleOutlineSvg {...props} />;
});
