import React, { FC, memo } from 'react';
import DistributeVerticalTopSvg from '../svg/distribute-vertical-top.svg';

export interface IDistributeVerticalTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DistributeVerticalTopIcon: FC<IDistributeVerticalTopIconProps> = memo(props => {
  return <DistributeVerticalTopSvg {...props} />;
});
