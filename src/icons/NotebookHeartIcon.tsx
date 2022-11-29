import React, { FC, memo } from 'react';
import NotebookHeartSvg from '../svg/notebook-heart.svg';

export interface INotebookHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookHeartIcon: FC<INotebookHeartIconProps> = memo(props => {
  return <NotebookHeartSvg {...props} />;
});
