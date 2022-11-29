import React, { FC, memo } from 'react';
import DistributeVerticalCenterSvg from '../svg/distribute-vertical-center.svg';

export interface IDistributeVerticalCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DistributeVerticalCenterIcon: FC<IDistributeVerticalCenterIconProps> = memo(props => {
  return <DistributeVerticalCenterSvg {...props} />;
});
