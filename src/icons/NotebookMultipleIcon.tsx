import React, { FC, memo } from 'react';
import NotebookMultipleSvg from '../svg/notebook-multiple.svg';

export interface INotebookMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookMultipleIcon: FC<INotebookMultipleIconProps> = memo(props => {
  return <NotebookMultipleSvg {...props} />;
});
