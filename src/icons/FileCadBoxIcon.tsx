import React, { FC, memo } from 'react';
import FileCadBoxSvg from '../svg/file-cad-box.svg';

export interface IFileCadBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCadBoxIcon: FC<IFileCadBoxIconProps> = memo(props => {
  return <FileCadBoxSvg {...props} />;
});
