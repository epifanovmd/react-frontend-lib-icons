import React, { FC, memo } from 'react';
import NotebookRemoveSvg from '../svg/notebook-remove.svg';

export interface INotebookRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookRemoveIcon: FC<INotebookRemoveIconProps> = memo(props => {
  return <NotebookRemoveSvg {...props} />;
});
