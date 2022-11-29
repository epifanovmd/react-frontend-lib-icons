import React, { FC, memo } from 'react';
import TelevisionShimmerSvg from '../svg/television-shimmer.svg';

export interface ITelevisionShimmerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionShimmerIcon: FC<ITelevisionShimmerIconProps> = memo(props => {
  return <TelevisionShimmerSvg {...props} />;
});
