import React, { FC, memo } from 'react';
import FileMinusSvg from '../svg/file-minus.svg';

export interface IFileMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMinusIcon: FC<IFileMinusIconProps> = memo(props => {
  return <FileMinusSvg {...props} />;
});
