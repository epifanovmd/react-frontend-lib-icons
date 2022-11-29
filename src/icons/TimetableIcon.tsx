import React, { FC, memo } from 'react';
import TimetableSvg from '../svg/timetable.svg';

export interface ITimetableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimetableIcon: FC<ITimetableIconProps> = memo(props => {
  return <TimetableSvg {...props} />;
});
