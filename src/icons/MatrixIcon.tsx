import React, { FC, memo } from 'react';
import MatrixSvg from '../svg/matrix.svg';

export interface IMatrixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MatrixIcon: FC<IMatrixIconProps> = memo(props => {
  return <MatrixSvg {...props} />;
});
