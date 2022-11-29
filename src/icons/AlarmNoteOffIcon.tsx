import React, { FC, memo } from 'react';
import AlarmNoteOffSvg from '../svg/alarm-note-off.svg';

export interface IAlarmNoteOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmNoteOffIcon: FC<IAlarmNoteOffIconProps> = memo(props => {
  return <AlarmNoteOffSvg {...props} />;
});
