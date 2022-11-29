import React, { FC, memo } from 'react';
import NoteCheckSvg from '../svg/note-check.svg';

export interface INoteCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteCheckIcon: FC<INoteCheckIconProps> = memo(props => {
  return <NoteCheckSvg {...props} />;
});
