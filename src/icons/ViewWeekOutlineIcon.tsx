import React, { FC, memo } from 'react';
import ViewWeekOutlineSvg from '../svg/view-week-outline.svg';

export interface IViewWeekOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewWeekOutlineIcon: FC<IViewWeekOutlineIconProps> = memo(props => {
  return <ViewWeekOutlineSvg {...props} />;
});
