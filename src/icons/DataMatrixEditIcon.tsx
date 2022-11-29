import React, { FC, memo } from 'react';
import DataMatrixEditSvg from '../svg/data-matrix-edit.svg';

export interface IDataMatrixEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DataMatrixEditIcon: FC<IDataMatrixEditIconProps> = memo(props => {
  return <DataMatrixEditSvg {...props} />;
});
