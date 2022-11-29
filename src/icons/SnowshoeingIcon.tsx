import React, { FC, memo } from 'react';
import SnowshoeingSvg from '../svg/snowshoeing.svg';

export interface ISnowshoeingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowshoeingIcon: FC<ISnowshoeingIconProps> = memo(props => {
  return <SnowshoeingSvg {...props} />;
});
