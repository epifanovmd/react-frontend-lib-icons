import React, { FC, memo } from 'react';
import AlphaCBoxSvg from '../svg/alpha-c-box.svg';

export interface IAlphaCBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaCBoxIcon: FC<IAlphaCBoxIconProps> = memo(props => {
  return <AlphaCBoxSvg {...props} />;
});
