import React, { FC, memo } from 'react';
import AlphaYSvg from '../svg/alpha-y.svg';

export interface IAlphaYIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaYIcon: FC<IAlphaYIconProps> = memo(props => {
  return <AlphaYSvg {...props} />;
});
