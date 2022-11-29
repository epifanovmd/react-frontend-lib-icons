import React, { FC, memo } from 'react';
import PlaneTrainSvg from '../svg/plane-train.svg';

export interface IPlaneTrainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaneTrainIcon: FC<IPlaneTrainIconProps> = memo(props => {
  return <PlaneTrainSvg {...props} />;
});
