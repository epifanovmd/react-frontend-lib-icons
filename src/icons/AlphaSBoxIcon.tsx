import React, { FC, memo } from 'react';
import AlphaSBoxSvg from '../svg/alpha-s-box.svg';

export interface IAlphaSBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaSBoxIcon: FC<IAlphaSBoxIconProps> = memo(props => {
  return <AlphaSBoxSvg {...props} />;
});
