import React, { FC, memo } from 'react';
import NoteMinusSvg from '../svg/note-minus.svg';

export interface INoteMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteMinusIcon: FC<INoteMinusIconProps> = memo(props => {
  return <NoteMinusSvg {...props} />;
});
