import React, { FC, memo } from 'react';
import BoomGateSvg from '../svg/boom-gate.svg';

export interface IBoomGateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateIcon: FC<IBoomGateIconProps> = memo(props => {
  return <BoomGateSvg {...props} />;
});
