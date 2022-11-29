import React, { FC, memo } from 'react';
import FilePlusSvg from '../svg/file-plus.svg';

export interface IFilePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePlusIcon: FC<IFilePlusIconProps> = memo(props => {
  return <FilePlusSvg {...props} />;
});
