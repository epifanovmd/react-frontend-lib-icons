import React, { FC, memo } from 'react';
import RivetSvg from '../svg/rivet.svg';

export interface IRivetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RivetIcon: FC<IRivetIconProps> = memo(props => {
  return <RivetSvg {...props} />;
});
