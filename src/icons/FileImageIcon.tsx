import React, { FC, memo } from 'react';
import FileImageSvg from '../svg/file-image.svg';

export interface IFileImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImageIcon: FC<IFileImageIconProps> = memo(props => {
  return <FileImageSvg {...props} />;
});
