import React, { FC, memo } from 'react';
import NotePlusSvg from '../svg/note-plus.svg';

export interface INotePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotePlusIcon: FC<INotePlusIconProps> = memo(props => {
  return <NotePlusSvg {...props} />;
});
