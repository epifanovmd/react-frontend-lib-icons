import React, { FC, memo } from 'react';
import EscalatorDownSvg from '../svg/escalator-down.svg';

export interface IEscalatorDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EscalatorDownIcon: FC<IEscalatorDownIconProps> = memo(props => {
  return <EscalatorDownSvg {...props} />;
});
