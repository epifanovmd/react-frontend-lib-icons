import React, { FC, memo } from 'react';
import FileCabinetSvg from '../svg/file-cabinet.svg';

export interface IFileCabinetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCabinetIcon: FC<IFileCabinetIconProps> = memo(props => {
  return <FileCabinetSvg {...props} />;
});
