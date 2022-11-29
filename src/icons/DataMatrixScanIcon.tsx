import React, { FC, memo } from 'react';
import DataMatrixScanSvg from '../svg/data-matrix-scan.svg';

export interface IDataMatrixScanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DataMatrixScanIcon: FC<IDataMatrixScanIconProps> = memo(props => {
  return <DataMatrixScanSvg {...props} />;
});
