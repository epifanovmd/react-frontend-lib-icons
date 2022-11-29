import React, { FC, memo } from 'react';
import FileArrowLeftRightOutlineSvg from '../svg/file-arrow-left-right-outline.svg';

export interface IFileArrowLeftRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileArrowLeftRightOutlineIcon: FC<IFileArrowLeftRightOutlineIconProps> = memo(props => {
  return <FileArrowLeftRightOutlineSvg {...props} />;
});
