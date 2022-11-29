import React, { FC, memo } from 'react';
import NotebookRemoveOutlineSvg from '../svg/notebook-remove-outline.svg';

export interface INotebookRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookRemoveOutlineIcon: FC<INotebookRemoveOutlineIconProps> = memo(props => {
  return <NotebookRemoveOutlineSvg {...props} />;
});
