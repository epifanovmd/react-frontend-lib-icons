import React, { FC, memo } from 'react';
import NoteTextSvg from '../svg/note-text.svg';

export interface INoteTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteTextIcon: FC<INoteTextIconProps> = memo(props => {
  return <NoteTextSvg {...props} />;
});
