import React, { FC, memo } from 'react';
import AlphaLSvg from '../svg/alpha-l.svg';

export interface IAlphaLIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaLIcon: FC<IAlphaLIconProps> = memo(props => {
  return <AlphaLSvg {...props} />;
});
