import React, { FC, memo } from 'react';
import FileArrowLeftRightSvg from '../svg/file-arrow-left-right.svg';

export interface IFileArrowLeftRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileArrowLeftRightIcon: FC<IFileArrowLeftRightIconProps> = memo(props => {
  return <FileArrowLeftRightSvg {...props} />;
});
