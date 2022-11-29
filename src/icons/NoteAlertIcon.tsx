import React, { FC, memo } from 'react';
import NoteAlertSvg from '../svg/note-alert.svg';

export interface INoteAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteAlertIcon: FC<INoteAlertIconProps> = memo(props => {
  return <NoteAlertSvg {...props} />;
});
