import React, { FC, memo } from 'react';
import FolderQuestionOutlineSvg from '../svg/folder-question-outline.svg';

export interface IFolderQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderQuestionOutlineIcon: FC<IFolderQuestionOutlineIconProps> = memo(props => {
  return <FolderQuestionOutlineSvg {...props} />;
});
