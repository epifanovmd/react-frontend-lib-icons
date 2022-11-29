import React, { FC, memo } from 'react';
import NotebookMinusSvg from '../svg/notebook-minus.svg';

export interface INotebookMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookMinusIcon: FC<INotebookMinusIconProps> = memo(props => {
  return <NotebookMinusSvg {...props} />;
});
