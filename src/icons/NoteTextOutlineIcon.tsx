import React, { FC, memo } from 'react';
import NoteTextOutlineSvg from '../svg/note-text-outline.svg';

export interface INoteTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteTextOutlineIcon: FC<INoteTextOutlineIconProps> = memo(props => {
  return <NoteTextOutlineSvg {...props} />;
});
