import React, { FC, memo } from 'react';
import NotebookEditSvg from '../svg/notebook-edit.svg';

export interface INotebookEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookEditIcon: FC<INotebookEditIconProps> = memo(props => {
  return <NotebookEditSvg {...props} />;
});
