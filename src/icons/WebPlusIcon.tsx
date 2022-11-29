import React, { FC, memo } from 'react';
import WebPlusSvg from '../svg/web-plus.svg';

export interface IWebPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebPlusIcon: FC<IWebPlusIconProps> = memo(props => {
  return <WebPlusSvg {...props} />;
});
