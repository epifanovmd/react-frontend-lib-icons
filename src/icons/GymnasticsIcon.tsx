import React, { FC, memo } from 'react';
import GymnasticsSvg from '../svg/gymnastics.svg';

export interface IGymnasticsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GymnasticsIcon: FC<IGymnasticsIconProps> = memo(props => {
  return <GymnasticsSvg {...props} />;
});
