import React, { FC, memo } from 'react';
import EngineOutlineSvg from '../svg/engine-outline.svg';

export interface IEngineOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EngineOutlineIcon: FC<IEngineOutlineIconProps> = memo(props => {
  return <EngineOutlineSvg {...props} />;
});
