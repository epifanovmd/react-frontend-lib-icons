import React, { FC, memo } from 'react';
import CameraMeteringMatrixSvg from '../svg/camera-metering-matrix.svg';

export interface ICameraMeteringMatrixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraMeteringMatrixIcon: FC<ICameraMeteringMatrixIconProps> = memo(props => {
  return <CameraMeteringMatrixSvg {...props} />;
});
