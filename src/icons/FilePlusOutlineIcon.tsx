import React, { FC, memo } from 'react';
import FilePlusOutlineSvg from '../svg/file-plus-outline.svg';

export interface IFilePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePlusOutlineIcon: FC<IFilePlusOutlineIconProps> = memo(props => {
  return <FilePlusOutlineSvg {...props} />;
});
