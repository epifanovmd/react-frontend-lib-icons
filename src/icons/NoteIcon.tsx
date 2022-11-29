import React, { FC, memo } from 'react';
import NoteSvg from '../svg/note.svg';

export interface INoteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteIcon: FC<INoteIconProps> = memo(props => {
  return <NoteSvg {...props} />;
});
