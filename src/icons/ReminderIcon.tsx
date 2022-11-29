import React, { FC, memo } from 'react';
import ReminderSvg from '../svg/reminder.svg';

export interface IReminderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReminderIcon: FC<IReminderIconProps> = memo(props => {
  return <ReminderSvg {...props} />;
});
