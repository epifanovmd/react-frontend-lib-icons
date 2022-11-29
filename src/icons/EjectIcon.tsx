import React, { FC, memo } from 'react';
import EjectSvg from '../svg/eject.svg';

export interface IEjectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EjectIcon: FC<IEjectIconProps> = memo(props => {
  return <EjectSvg {...props} />;
});
