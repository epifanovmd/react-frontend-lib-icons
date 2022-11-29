import React, { FC, memo } from 'react';
import WebRemoveSvg from '../svg/web-remove.svg';

export interface IWebRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebRemoveIcon: FC<IWebRemoveIconProps> = memo(props => {
  return <WebRemoveSvg {...props} />;
});
