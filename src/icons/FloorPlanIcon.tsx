import React, { FC, memo } from 'react';
import FloorPlanSvg from '../svg/floor-plan.svg';

export interface IFloorPlanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloorPlanIcon: FC<IFloorPlanIconProps> = memo(props => {
  return <FloorPlanSvg {...props} />;
});
