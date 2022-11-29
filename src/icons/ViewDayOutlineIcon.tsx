import React, { FC, memo } from 'react';
import ViewDayOutlineSvg from '../svg/view-day-outline.svg';

export interface IViewDayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewDayOutlineIcon: FC<IViewDayOutlineIconProps> = memo(props => {
  return <ViewDayOutlineSvg {...props} />;
});
