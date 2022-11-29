import React, { FC, memo } from 'react';
import EngineOffOutlineSvg from '../svg/engine-off-outline.svg';

export interface IEngineOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EngineOffOutlineIcon: FC<IEngineOffOutlineIconProps> = memo(props => {
  return <EngineOffOutlineSvg {...props} />;
});
