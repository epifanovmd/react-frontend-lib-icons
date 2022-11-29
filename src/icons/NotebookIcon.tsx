import React, { FC, memo } from 'react';
import NotebookSvg from '../svg/notebook.svg';

export interface INotebookIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookIcon: FC<INotebookIconProps> = memo(props => {
  return <NotebookSvg {...props} />;
});
