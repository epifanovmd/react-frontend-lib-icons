import React, { FC, memo } from 'react';
import GateNorSvg from '../svg/gate-nor.svg';

export interface IGateNorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateNorIcon: FC<IGateNorIconProps> = memo(props => {
  return <GateNorSvg {...props} />;
});
