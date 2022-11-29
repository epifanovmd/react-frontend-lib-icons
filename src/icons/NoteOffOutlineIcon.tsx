import React, { FC, memo } from 'react';
import NoteOffOutlineSvg from '../svg/note-off-outline.svg';

export interface INoteOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteOffOutlineIcon: FC<INoteOffOutlineIconProps> = memo(props => {
  return <NoteOffOutlineSvg {...props} />;
});
