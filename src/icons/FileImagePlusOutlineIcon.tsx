import React, { FC, memo } from 'react';
import FileImagePlusOutlineSvg from '../svg/file-image-plus-outline.svg';

export interface IFileImagePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImagePlusOutlineIcon: FC<IFileImagePlusOutlineIconProps> = memo(props => {
  return <FileImagePlusOutlineSvg {...props} />;
});
