import React, { FC, memo } from 'react';
import WebCancelSvg from '../svg/web-cancel.svg';

export interface IWebCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebCancelIcon: FC<IWebCancelIconProps> = memo(props => {
  return <WebCancelSvg {...props} />;
});
