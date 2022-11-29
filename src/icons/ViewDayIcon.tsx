import React, { FC, memo } from 'react';
import ViewDaySvg from '../svg/view-day.svg';

export interface IViewDayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewDayIcon: FC<IViewDayIconProps> = memo(props => {
  return <ViewDaySvg {...props} />;
});
