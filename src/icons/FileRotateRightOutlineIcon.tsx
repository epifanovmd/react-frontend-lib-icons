import React, { FC, memo } from 'react';
import FileRotateRightOutlineSvg from '../svg/file-rotate-right-outline.svg';

export interface IFileRotateRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRotateRightOutlineIcon: FC<IFileRotateRightOutlineIconProps> = memo(props => {
  return <FileRotateRightOutlineSvg {...props} />;
});
