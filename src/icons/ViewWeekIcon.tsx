import React, { FC, memo } from 'react';
import ViewWeekSvg from '../svg/view-week.svg';

export interface IViewWeekIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewWeekIcon: FC<IViewWeekIconProps> = memo(props => {
  return <ViewWeekSvg {...props} />;
});
