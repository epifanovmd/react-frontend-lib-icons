import React, { FC, memo } from 'react';
import FileImageOutlineSvg from '../svg/file-image-outline.svg';

export interface IFileImageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImageOutlineIcon: FC<IFileImageOutlineIconProps> = memo(props => {
  return <FileImageOutlineSvg {...props} />;
});
