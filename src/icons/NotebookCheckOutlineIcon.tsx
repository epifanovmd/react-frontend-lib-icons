import React, { FC, memo } from 'react';
import NotebookCheckOutlineSvg from '../svg/notebook-check-outline.svg';

export interface INotebookCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookCheckOutlineIcon: FC<INotebookCheckOutlineIconProps> = memo(props => {
  return <NotebookCheckOutlineSvg {...props} />;
});
