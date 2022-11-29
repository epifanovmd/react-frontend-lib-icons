import React, { FC, memo } from 'react';
import GateArrowLeftSvg from '../svg/gate-arrow-left.svg';

export interface IGateArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateArrowLeftIcon: FC<IGateArrowLeftIconProps> = memo(props => {
  return <GateArrowLeftSvg {...props} />;
});
