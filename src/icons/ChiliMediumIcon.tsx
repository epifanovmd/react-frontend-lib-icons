import React, { FC, memo } from 'react';
import ChiliMediumSvg from '../svg/chili-medium.svg';

export interface IChiliMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliMediumIcon: FC<IChiliMediumIconProps> = memo(props => {
  return <ChiliMediumSvg {...props} />;
});
