import React, { FC, memo } from 'react';
import NotebookMinusOutlineSvg from '../svg/notebook-minus-outline.svg';

export interface INotebookMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookMinusOutlineIcon: FC<INotebookMinusOutlineIconProps> = memo(props => {
  return <NotebookMinusOutlineSvg {...props} />;
});
