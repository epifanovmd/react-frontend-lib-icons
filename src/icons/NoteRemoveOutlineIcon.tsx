import React, { FC, memo } from 'react';
import NoteRemoveOutlineSvg from '../svg/note-remove-outline.svg';

export interface INoteRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteRemoveOutlineIcon: FC<INoteRemoveOutlineIconProps> = memo(props => {
  return <NoteRemoveOutlineSvg {...props} />;
});
