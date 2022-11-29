import React, { FC, memo } from 'react';
import TransitDetourSvg from '../svg/transit-detour.svg';

export interface ITransitDetourIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransitDetourIcon: FC<ITransitDetourIconProps> = memo(props => {
  return <TransitDetourSvg {...props} />;
});
