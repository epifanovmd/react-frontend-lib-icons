import React, { FC, memo } from 'react';
import AlphaDBoxSvg from '../svg/alpha-d-box.svg';

export interface IAlphaDBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaDBoxIcon: FC<IAlphaDBoxIconProps> = memo(props => {
  return <AlphaDBoxSvg {...props} />;
});
