import React, { FC, memo } from 'react';
import HeartMultipleSvg from '../svg/heart-multiple.svg';

export interface IHeartMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartMultipleIcon: FC<IHeartMultipleIconProps> = memo(props => {
  return <HeartMultipleSvg {...props} />;
});
