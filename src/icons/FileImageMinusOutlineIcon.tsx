import React, { FC, memo } from 'react';
import FileImageMinusOutlineSvg from '../svg/file-image-minus-outline.svg';

export interface IFileImageMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImageMinusOutlineIcon: FC<IFileImageMinusOutlineIconProps> = memo(props => {
  return <FileImageMinusOutlineSvg {...props} />;
});
