import React, { FC, memo } from 'react';
import FileImageRemoveOutlineSvg from '../svg/file-image-remove-outline.svg';

export interface IFileImageRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImageRemoveOutlineIcon: FC<IFileImageRemoveOutlineIconProps> = memo(props => {
  return <FileImageRemoveOutlineSvg {...props} />;
});
