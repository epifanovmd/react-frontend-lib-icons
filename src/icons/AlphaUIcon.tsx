import React, { FC, memo } from 'react';
import AlphaUSvg from '../svg/alpha-u.svg';

export interface IAlphaUIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaUIcon: FC<IAlphaUIconProps> = memo(props => {
  return <AlphaUSvg {...props} />;
});
