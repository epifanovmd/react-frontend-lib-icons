import React, { FC, memo } from 'react';
import NoteEditOutlineSvg from '../svg/note-edit-outline.svg';

export interface INoteEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteEditOutlineIcon: FC<INoteEditOutlineIconProps> = memo(props => {
  return <NoteEditOutlineSvg {...props} />;
});
