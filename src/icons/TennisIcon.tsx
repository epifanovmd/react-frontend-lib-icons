import React, { FC, memo } from 'react';
import TennisSvg from '../svg/tennis.svg';

export interface ITennisIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TennisIcon: FC<ITennisIconProps> = memo(props => {
  return <TennisSvg {...props} />;
});
