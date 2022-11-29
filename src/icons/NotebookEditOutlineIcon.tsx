import React, { FC, memo } from 'react';
import NotebookEditOutlineSvg from '../svg/notebook-edit-outline.svg';

export interface INotebookEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookEditOutlineIcon: FC<INotebookEditOutlineIconProps> = memo(props => {
  return <NotebookEditOutlineSvg {...props} />;
});
