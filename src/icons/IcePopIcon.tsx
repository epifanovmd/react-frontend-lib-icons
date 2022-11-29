import React, { FC, memo } from 'react';
import IcePopSvg from '../svg/ice-pop.svg';

export interface IIcePopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IcePopIcon: FC<IIcePopIconProps> = memo(props => {
  return <IcePopSvg {...props} />;
});
