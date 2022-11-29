import React, { FC, memo } from 'react';
import AlphaOCircleOutlineSvg from '../svg/alpha-o-circle-outline.svg';

export interface IAlphaOCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaOCircleOutlineIcon: FC<IAlphaOCircleOutlineIconProps> = memo(props => {
  return <AlphaOCircleOutlineSvg {...props} />;
});
