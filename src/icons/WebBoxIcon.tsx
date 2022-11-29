import React, { FC, memo } from 'react';
import WebBoxSvg from '../svg/web-box.svg';

export interface IWebBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebBoxIcon: FC<IWebBoxIconProps> = memo(props => {
  return <WebBoxSvg {...props} />;
});
