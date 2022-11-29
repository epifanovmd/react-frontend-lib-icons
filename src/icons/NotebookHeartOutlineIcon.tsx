import React, { FC, memo } from 'react';
import NotebookHeartOutlineSvg from '../svg/notebook-heart-outline.svg';

export interface INotebookHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookHeartOutlineIcon: FC<INotebookHeartOutlineIconProps> = memo(props => {
  return <NotebookHeartOutlineSvg {...props} />;
});
