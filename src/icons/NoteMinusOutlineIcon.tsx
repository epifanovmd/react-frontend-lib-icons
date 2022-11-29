import React, { FC, memo } from 'react';
import NoteMinusOutlineSvg from '../svg/note-minus-outline.svg';

export interface INoteMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteMinusOutlineIcon: FC<INoteMinusOutlineIconProps> = memo(props => {
  return <NoteMinusOutlineSvg {...props} />;
});
