import React, { FC, memo } from 'react';
import AlphaFBoxOutlineSvg from '../svg/alpha-f-box-outline.svg';

export interface IAlphaFBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaFBoxOutlineIcon: FC<IAlphaFBoxOutlineIconProps> = memo(props => {
  return <AlphaFBoxOutlineSvg {...props} />;
});
