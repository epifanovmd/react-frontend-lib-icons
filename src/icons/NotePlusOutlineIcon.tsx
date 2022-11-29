import React, { FC, memo } from 'react';
import NotePlusOutlineSvg from '../svg/note-plus-outline.svg';

export interface INotePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotePlusOutlineIcon: FC<INotePlusOutlineIconProps> = memo(props => {
  return <NotePlusOutlineSvg {...props} />;
});
