import React, { FC, memo } from 'react';
import DataMatrixPlusSvg from '../svg/data-matrix-plus.svg';

export interface IDataMatrixPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DataMatrixPlusIcon: FC<IDataMatrixPlusIconProps> = memo(props => {
  return <DataMatrixPlusSvg {...props} />;
});
