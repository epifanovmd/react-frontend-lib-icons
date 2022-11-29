import React, { FC, memo } from 'react';
import AlphaQSvg from '../svg/alpha-q.svg';

export interface IAlphaQIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaQIcon: FC<IAlphaQIconProps> = memo(props => {
  return <AlphaQSvg {...props} />;
});
