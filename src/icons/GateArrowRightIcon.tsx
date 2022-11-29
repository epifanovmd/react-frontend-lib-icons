import React, { FC, memo } from 'react';
import GateArrowRightSvg from '../svg/gate-arrow-right.svg';

export interface IGateArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateArrowRightIcon: FC<IGateArrowRightIconProps> = memo(props => {
  return <GateArrowRightSvg {...props} />;
});
