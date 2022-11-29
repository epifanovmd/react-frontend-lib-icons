import React, { FC, memo } from 'react';
import TransitConnectionHorizontalSvg from '../svg/transit-connection-horizontal.svg';

export interface ITransitConnectionHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransitConnectionHorizontalIcon: FC<ITransitConnectionHorizontalIconProps> = memo(props => {
  return <TransitConnectionHorizontalSvg {...props} />;
});
