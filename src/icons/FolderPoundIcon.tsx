import React, { FC, memo } from 'react';
import FolderPoundSvg from '../svg/folder-pound.svg';

export interface IFolderPoundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderPoundIcon: FC<IFolderPoundIconProps> = memo(props => {
  return <FolderPoundSvg {...props} />;
});
