import React, { FC, memo } from 'react';
import EtSvg from '../svg/et.svg';

export interface IEtIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EtIcon: FC<IEtIconProps> = memo(props => {
  return <EtSvg {...props} />;
});
