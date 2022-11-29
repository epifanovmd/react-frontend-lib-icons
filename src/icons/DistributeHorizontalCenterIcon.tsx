import React, { FC, memo } from 'react';
import DistributeHorizontalCenterSvg from '../svg/distribute-horizontal-center.svg';

export interface IDistributeHorizontalCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DistributeHorizontalCenterIcon: FC<IDistributeHorizontalCenterIconProps> = memo(props => {
  return <DistributeHorizontalCenterSvg {...props} />;
});
