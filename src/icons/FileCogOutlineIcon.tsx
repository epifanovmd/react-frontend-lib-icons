import React, { FC, memo } from 'react';
import FileCogOutlineSvg from '../svg/file-cog-outline.svg';

export interface IFileCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCogOutlineIcon: FC<IFileCogOutlineIconProps> = memo(props => {
  return <FileCogOutlineSvg {...props} />;
});
