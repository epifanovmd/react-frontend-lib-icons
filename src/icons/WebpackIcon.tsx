import React, { FC, memo } from 'react';
import WebpackSvg from '../svg/webpack.svg';

export interface IWebpackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebpackIcon: FC<IWebpackIconProps> = memo(props => {
  return <WebpackSvg {...props} />;
});
