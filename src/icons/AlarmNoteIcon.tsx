import React, { FC, memo } from 'react';
import AlarmNoteSvg from '../svg/alarm-note.svg';

export interface IAlarmNoteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmNoteIcon: FC<IAlarmNoteIconProps> = memo(props => {
  return <AlarmNoteSvg {...props} />;
});
