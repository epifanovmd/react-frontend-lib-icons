import React, { FC, memo } from 'react';
import DataMatrixRemoveSvg from '../svg/data-matrix-remove.svg';

export interface IDataMatrixRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DataMatrixRemoveIcon: FC<IDataMatrixRemoveIconProps> = memo(props => {
  return <DataMatrixRemoveSvg {...props} />;
});
