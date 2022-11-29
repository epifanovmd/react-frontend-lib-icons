import React, { FC, memo } from 'react';
import FileCadSvg from '../svg/file-cad.svg';

export interface IFileCadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCadIcon: FC<IFileCadIconProps> = memo(props => {
  return <FileCadSvg {...props} />;
});
