import React, { FC, memo } from 'react';
import DistributeVerticalBottomSvg from '../svg/distribute-vertical-bottom.svg';

export interface IDistributeVerticalBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DistributeVerticalBottomIcon: FC<IDistributeVerticalBottomIconProps> = memo(props => {
  return <DistributeVerticalBottomSvg {...props} />;
});
