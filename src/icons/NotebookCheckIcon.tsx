import React, { FC, memo } from 'react';
import NotebookCheckSvg from '../svg/notebook-check.svg';

export interface INotebookCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookCheckIcon: FC<INotebookCheckIconProps> = memo(props => {
  return <NotebookCheckSvg {...props} />;
});
