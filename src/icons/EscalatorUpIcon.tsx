import React, { FC, memo } from 'react';
import EscalatorUpSvg from '../svg/escalator-up.svg';

export interface IEscalatorUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EscalatorUpIcon: FC<IEscalatorUpIconProps> = memo(props => {
  return <EscalatorUpSvg {...props} />;
});
