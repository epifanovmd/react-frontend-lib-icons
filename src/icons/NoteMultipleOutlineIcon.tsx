import React, { FC, memo } from 'react';
import NoteMultipleOutlineSvg from '../svg/note-multiple-outline.svg';

export interface INoteMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteMultipleOutlineIcon: FC<INoteMultipleOutlineIconProps> = memo(props => {
  return <NoteMultipleOutlineSvg {...props} />;
});
