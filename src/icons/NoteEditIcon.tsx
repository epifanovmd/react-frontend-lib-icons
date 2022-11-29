import React, { FC, memo } from 'react';
import NoteEditSvg from '../svg/note-edit.svg';

export interface INoteEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteEditIcon: FC<INoteEditIconProps> = memo(props => {
  return <NoteEditSvg {...props} />;
});
