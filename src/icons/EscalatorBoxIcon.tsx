import React, { FC, memo } from 'react';
import EscalatorBoxSvg from '../svg/escalator-box.svg';

export interface IEscalatorBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EscalatorBoxIcon: FC<IEscalatorBoxIconProps> = memo(props => {
  return <EscalatorBoxSvg {...props} />;
});
