import React, { FC, memo } from 'react';
import NoteAlertOutlineSvg from '../svg/note-alert-outline.svg';

export interface INoteAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteAlertOutlineIcon: FC<INoteAlertOutlineIconProps> = memo(props => {
  return <NoteAlertOutlineSvg {...props} />;
});
