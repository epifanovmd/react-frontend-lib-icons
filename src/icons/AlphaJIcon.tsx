import React, { FC, memo } from 'react';
import AlphaJSvg from '../svg/alpha-j.svg';

export interface IAlphaJIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaJIcon: FC<IAlphaJIconProps> = memo(props => {
  return <AlphaJSvg {...props} />;
});
