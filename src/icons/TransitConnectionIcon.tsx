import React, { FC, memo } from 'react';
import TransitConnectionSvg from '../svg/transit-connection.svg';

export interface ITransitConnectionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransitConnectionIcon: FC<ITransitConnectionIconProps> = memo(props => {
  return <TransitConnectionSvg {...props} />;
});
