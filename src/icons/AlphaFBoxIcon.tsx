import React, { FC, memo } from 'react';
import AlphaFBoxSvg from '../svg/alpha-f-box.svg';

export interface IAlphaFBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaFBoxIcon: FC<IAlphaFBoxIconProps> = memo(props => {
  return <AlphaFBoxSvg {...props} />;
});
