import React, { FC, memo } from 'react';
import TelevisionBoxSvg from '../svg/television-box.svg';

export interface ITelevisionBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionBoxIcon: FC<ITelevisionBoxIconProps> = memo(props => {
  return <TelevisionBoxSvg {...props} />;
});
