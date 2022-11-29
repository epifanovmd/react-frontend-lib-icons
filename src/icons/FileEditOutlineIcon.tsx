import React, { FC, memo } from 'react';
import FileEditOutlineSvg from '../svg/file-edit-outline.svg';

export interface IFileEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileEditOutlineIcon: FC<IFileEditOutlineIconProps> = memo(props => {
  return <FileEditOutlineSvg {...props} />;
});
