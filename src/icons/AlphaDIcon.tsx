import React, { FC, memo } from 'react';
import AlphaDSvg from '../svg/alpha-d.svg';

export interface IAlphaDIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaDIcon: FC<IAlphaDIconProps> = memo(props => {
  return <AlphaDSvg {...props} />;
});
