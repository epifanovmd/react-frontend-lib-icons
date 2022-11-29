import React, { FC, memo } from 'react';
import NotebookPlusOutlineSvg from '../svg/notebook-plus-outline.svg';

export interface INotebookPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookPlusOutlineIcon: FC<INotebookPlusOutlineIconProps> = memo(props => {
  return <NotebookPlusOutlineSvg {...props} />;
});
