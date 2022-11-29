import React, { FC, memo } from 'react';
import SailBoatSinkSvg from '../svg/sail-boat-sink.svg';

export interface ISailBoatSinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SailBoatSinkIcon: FC<ISailBoatSinkIconProps> = memo(props => {
  return <SailBoatSinkSvg {...props} />;
});
