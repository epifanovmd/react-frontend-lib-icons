import React, { FC, memo } from 'react';
import NoteOffSvg from '../svg/note-off.svg';

export interface INoteOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteOffIcon: FC<INoteOffIconProps> = memo(props => {
  return <NoteOffSvg {...props} />;
});
