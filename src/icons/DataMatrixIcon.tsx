import React, { FC, memo } from 'react';
import DataMatrixSvg from '../svg/data-matrix.svg';

export interface IDataMatrixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DataMatrixIcon: FC<IDataMatrixIconProps> = memo(props => {
  return <DataMatrixSvg {...props} />;
});
