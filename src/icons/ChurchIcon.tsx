import React, { FC, memo } from 'react';
import ChurchSvg from '../svg/church.svg';

export interface IChurchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChurchIcon: FC<IChurchIconProps> = memo(props => {
  return <ChurchSvg {...props} />;
});
