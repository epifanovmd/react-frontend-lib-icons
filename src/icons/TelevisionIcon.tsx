import React, { FC, memo } from 'react';
import TelevisionSvg from '../svg/television.svg';

export interface ITelevisionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionIcon: FC<ITelevisionIconProps> = memo(props => {
  return <TelevisionSvg {...props} />;
});
