import React, { FC, memo } from 'react';
import PercentCircleOutlineSvg from '../svg/percent-circle-outline.svg';

export interface IPercentCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PercentCircleOutlineIcon: FC<IPercentCircleOutlineIconProps> = memo(props => {
  return <PercentCircleOutlineSvg {...props} />;
});
