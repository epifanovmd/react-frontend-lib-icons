import React, { FC, memo } from 'react';
import NoteRemoveSvg from '../svg/note-remove.svg';

export interface INoteRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteRemoveIcon: FC<INoteRemoveIconProps> = memo(props => {
  return <NoteRemoveSvg {...props} />;
});
