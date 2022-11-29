import React, { FC, memo } from 'react';
import DistributeHorizontalLeftSvg from '../svg/distribute-horizontal-left.svg';

export interface IDistributeHorizontalLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DistributeHorizontalLeftIcon: FC<IDistributeHorizontalLeftIconProps> = memo(props => {
  return <DistributeHorizontalLeftSvg {...props} />;
});
