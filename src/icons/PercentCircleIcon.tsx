import React, { FC, memo } from 'react';
import PercentCircleSvg from '../svg/percent-circle.svg';

export interface IPercentCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PercentCircleIcon: FC<IPercentCircleIconProps> = memo(props => {
  return <PercentCircleSvg {...props} />;
});
