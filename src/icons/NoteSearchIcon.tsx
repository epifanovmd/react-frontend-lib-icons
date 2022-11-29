import React, { FC, memo } from 'react';
import NoteSearchSvg from '../svg/note-search.svg';

export interface INoteSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteSearchIcon: FC<INoteSearchIconProps> = memo(props => {
  return <NoteSearchSvg {...props} />;
});
