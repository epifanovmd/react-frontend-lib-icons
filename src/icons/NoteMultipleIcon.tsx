import React, { FC, memo } from 'react';
import NoteMultipleSvg from '../svg/note-multiple.svg';

export interface INoteMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoteMultipleIcon: FC<INoteMultipleIconProps> = memo(props => {
  return <NoteMultipleSvg {...props} />;
});
