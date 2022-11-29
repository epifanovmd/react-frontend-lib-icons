import React, { FC, memo } from 'react';
import FileImagePlusSvg from '../svg/file-image-plus.svg';

export interface IFileImagePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImagePlusIcon: FC<IFileImagePlusIconProps> = memo(props => {
  return <FileImagePlusSvg {...props} />;
});
