import React, { FC, memo } from 'react';
import NaturePeopleSvg from '../svg/nature-people.svg';

export interface INaturePeopleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NaturePeopleIcon: FC<INaturePeopleIconProps> = memo(props => {
  return <NaturePeopleSvg {...props} />;
});
