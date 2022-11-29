import React, { FC, memo } from 'react';
import IronSvg from '../svg/iron.svg';

export interface IIronIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IronIcon: FC<IIronIconProps> = memo(props => {
  return <IronSvg {...props} />;
});
