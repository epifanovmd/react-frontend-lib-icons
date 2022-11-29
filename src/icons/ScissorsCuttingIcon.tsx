import React, { FC, memo } from 'react';
import ScissorsCuttingSvg from '../svg/scissors-cutting.svg';

export interface IScissorsCuttingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScissorsCuttingIcon: FC<IScissorsCuttingIconProps> = memo(props => {
  return <ScissorsCuttingSvg {...props} />;
});
