import React, { FC, memo } from 'react';
import EscalatorSvg from '../svg/escalator.svg';

export interface IEscalatorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EscalatorIcon: FC<IEscalatorIconProps> = memo(props => {
  return <EscalatorSvg {...props} />;
});
