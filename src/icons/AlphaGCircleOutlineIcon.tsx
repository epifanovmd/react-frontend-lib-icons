import React, { FC, memo } from 'react';
import AlphaGCircleOutlineSvg from '../svg/alpha-g-circle-outline.svg';

export interface IAlphaGCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaGCircleOutlineIcon: FC<IAlphaGCircleOutlineIconProps> = memo(props => {
  return <AlphaGCircleOutlineSvg {...props} />;
});
