import React, { FC, memo } from 'react';
import GateBufferSvg from '../svg/gate-buffer.svg';

export interface IGateBufferIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateBufferIcon: FC<IGateBufferIconProps> = memo(props => {
  return <GateBufferSvg {...props} />;
});
