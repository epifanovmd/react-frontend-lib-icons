import React, { FC, memo } from 'react';
import SubwaySvg from '../svg/subway.svg';

export interface ISubwayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SubwayIcon: FC<ISubwayIconProps> = memo(props => {
  return <SubwaySvg {...props} />;
});
