import React, { FC, memo } from 'react';
import FileImageMinusSvg from '../svg/file-image-minus.svg';

export interface IFileImageMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImageMinusIcon: FC<IFileImageMinusIconProps> = memo(props => {
  return <FileImageMinusSvg {...props} />;
});
