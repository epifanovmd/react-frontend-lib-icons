import React, { FC, memo } from 'react';
import FileAccountOutlineSvg from '../svg/file-account-outline.svg';

export interface IFileAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileAccountOutlineIcon: FC<IFileAccountOutlineIconProps> = memo(props => {
  return <FileAccountOutlineSvg {...props} />;
});
