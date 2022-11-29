import React, { FC, memo } from 'react';
import CableDataSvg from '../svg/cable-data.svg';

export interface ICableDataIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CableDataIcon: FC<ICableDataIconProps> = memo(props => {
  return <CableDataSvg {...props} />;
});
