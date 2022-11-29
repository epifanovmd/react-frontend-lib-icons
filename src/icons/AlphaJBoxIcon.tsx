import React, { FC, memo } from 'react';
import AlphaJBoxSvg from '../svg/alpha-j-box.svg';

export interface IAlphaJBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaJBoxIcon: FC<IAlphaJBoxIconProps> = memo(props => {
  return <AlphaJBoxSvg {...props} />;
});
