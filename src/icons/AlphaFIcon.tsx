import React, { FC, memo } from 'react';
import AlphaFSvg from '../svg/alpha-f.svg';

export interface IAlphaFIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaFIcon: FC<IAlphaFIconProps> = memo(props => {
  return <AlphaFSvg {...props} />;
});
