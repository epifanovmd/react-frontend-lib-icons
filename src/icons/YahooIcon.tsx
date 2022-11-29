import React, { FC, memo } from 'react';
import YahooSvg from '../svg/yahoo.svg';

export interface IYahooIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YahooIcon: FC<IYahooIconProps> = memo(props => {
  return <YahooSvg {...props} />;
});
