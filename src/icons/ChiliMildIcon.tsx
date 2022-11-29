import React, { FC, memo } from 'react';
import ChiliMildSvg from '../svg/chili-mild.svg';

export interface IChiliMildIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliMildIcon: FC<IChiliMildIconProps> = memo(props => {
  return <ChiliMildSvg {...props} />;
});
