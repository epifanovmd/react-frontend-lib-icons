import React, { FC, memo } from 'react';
import DataMatrixMinusSvg from '../svg/data-matrix-minus.svg';

export interface IDataMatrixMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DataMatrixMinusIcon: FC<IDataMatrixMinusIconProps> = memo(props => {
  return <DataMatrixMinusSvg {...props} />;
});
