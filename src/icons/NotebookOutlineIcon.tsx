import React, { FC, memo } from 'react';
import NotebookOutlineSvg from '../svg/notebook-outline.svg';

export interface INotebookOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookOutlineIcon: FC<INotebookOutlineIconProps> = memo(props => {
  return <NotebookOutlineSvg {...props} />;
});
