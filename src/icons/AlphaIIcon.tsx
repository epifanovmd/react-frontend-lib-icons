import React, { FC, memo } from 'react';
import AlphaISvg from '../svg/alpha-i.svg';

export interface IAlphaIIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaIIcon: FC<IAlphaIIconProps> = memo(props => {
  return <AlphaISvg {...props} />;
});
