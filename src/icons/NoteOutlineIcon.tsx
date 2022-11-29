import React, { FC, memo } from 'react';
import NoteOutlineSvg from '../svg/note-outline.svg';

export interface INoteOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteOutlineIcon: FC<INoteOutlineIconProps> = memo(props => {
  return <NoteOutlineSvg {...props} />;
});
