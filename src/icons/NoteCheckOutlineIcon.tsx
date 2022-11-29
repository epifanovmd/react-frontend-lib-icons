import React, { FC, memo } from 'react';
import NoteCheckOutlineSvg from '../svg/note-check-outline.svg';

export interface INoteCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteCheckOutlineIcon: FC<INoteCheckOutlineIconProps> = memo(props => {
  return <NoteCheckOutlineSvg {...props} />;
});
