import React, { FC, memo } from 'react';
import CandelabraSvg from '../svg/candelabra.svg';

export interface ICandelabraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CandelabraIcon: FC<ICandelabraIconProps> = memo(props => {
  return <CandelabraSvg {...props} />;
});
