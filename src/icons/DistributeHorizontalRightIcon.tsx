import React, { FC, memo } from 'react';
import DistributeHorizontalRightSvg from '../svg/distribute-horizontal-right.svg';

export interface IDistributeHorizontalRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DistributeHorizontalRightIcon: FC<IDistributeHorizontalRightIconProps> = memo(props => {
  return <DistributeHorizontalRightSvg {...props} />;
});
