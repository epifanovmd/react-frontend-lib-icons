import React, { FC, memo } from 'react';
import TelevisionOffSvg from '../svg/television-off.svg';

export interface ITelevisionOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionOffIcon: FC<ITelevisionOffIconProps> = memo(props => {
  return <TelevisionOffSvg {...props} />;
});
