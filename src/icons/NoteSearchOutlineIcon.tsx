import React, { FC, memo } from 'react';
import NoteSearchOutlineSvg from '../svg/note-search-outline.svg';

export interface INoteSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteSearchOutlineIcon: FC<INoteSearchOutlineIconProps> = memo(props => {
  return <NoteSearchOutlineSvg {...props} />;
});
