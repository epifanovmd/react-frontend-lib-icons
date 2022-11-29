import React, { FC, memo } from 'react';
import AlphaSvg from '../svg/alpha.svg';

export interface IAlphaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaIcon: FC<IAlphaIconProps> = memo(props => {
  return <AlphaSvg {...props} />;
});
